import React, { useState } from 'react';
import { Button, Typography, Row, Col, Input, Select, Divider, message, Descriptions, Modal, Tabs } from 'antd';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PersistedState from 'use-persisted-state';
import SyntaxHighlighter from 'react-syntax-highlighter';
import QueueAnim from 'rc-queue-anim';
import axios from 'axios';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;
const { TextArea } = Input;

export default (props) => {
	const http_url = PersistedState('http_url_repeater');
	const [ isModalVisible, setIsModalVisible ] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};
	const handleOk = () => {
		setIsModalVisible(false);
	};
	const handleCancel = () => {
		setIsModalVisible(false);
	};
	const [ values, setValues ] = http_url({
		// httpbin.org/get
		url: 'lipsum.com',
		protocol: 'http://',
		type: 'GET'
	});
	const loadingMessage = () => {
		message.loading({ content: 'Loading...' });
	};
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const handleChangeSelect = (name) => (event) => {
		setValues({ ...values, [name]: event });
	};

	// Axios fetch
	const [ content, setContent ] = useState([]);
	const [ headerContent, setHeaderContent ] = useState([]);
	const [ commentResponse, setCommentResponse ] = useState([]);
	const [ inputResponse, setInputResponse ] = useState([]);
	const [ loading, setLoading ] = useState();
	const fetchData = async () => {
		setLoading(true);
		await axios({
			method: values.type,
			url: 'https://cors-hack-tools.herokuapp.com/' + values.protocol + values.url,
			headers: {},
			auth: {}
		})
			.then((res) => {
				setLoading(false);
				setContent(res);
				setHeaderContent(res.headers['content-type']);
				console.log(res);
				const commentOnlyRegex = res.data.match(RegExp(/<!--.*?-->/, 'g'));
				if (commentOnlyRegex != null) setCommentResponse(commentOnlyRegex);
				const inputOnlyRegex = res.data.match(RegExp(/<input(.*?)\>/, 'g'));
				if (inputOnlyRegex != null) setInputResponse(inputOnlyRegex);
			})
			.catch((err) => {
				message.error(err);
				console.log(err);
			});
	};

	return (
		<QueueAnim delay={300} duration={1500}>
			<Title variant='Title level={3}' style={{ fontWeight: 'bold', margin: 15 }}>
				HTTP Repeater
			</Title>
			<Paragraph style={{ marginLeft: 15 }}>
				HTTP Repeater is a simple tool for manually manipulating and reissuing individual HTTP and WebSocket
				messages, and analyzing the application's responses. You can use Repeater for all kinds of purposes,
				such as changing parameter values to test for input-based vulnerabilities, issuing requests in a
				specific sequence to test for logic flaws.
			</Paragraph>
			<Divider dashed />
			<Row gutter={[ 16, 16 ]} style={{ padding: 15 }}>
				<Col>
					<Select
						defaultValue='GET'
						style={{ width: '100%' }}
						value={values.type}
						onChange={handleChangeSelect('type')}
					>
						<Option value={'GET'}>GET</Option>
						<Option value={'POST'}>POST</Option>
						<Option value={'HEAD'}>HEAD</Option>
						<Option value={'PUT'}>PUT</Option>
						<Option value={'DELETE'}>DELETE</Option>
						<Option value={'OPTIONS'}>OPTIONS</Option>
						<Option value={'PATCH'}>PATCH</Option>
					</Select>
				</Col>
				<Col>
					<Select
						defaultValue='http://'
						style={{ width: '100%' }}
						value={values.protocol}
						onChange={handleChangeSelect('protocol')}
					>
						<Option value={'http://'}>HTTP</Option>
						<Option value={'https://'}>HTTPS</Option>
					</Select>
				</Col>
				<Col span={9}>
					<Input
						style={{ borderColor: '#434343' }}
						onChange={handleChange('url')}
						onSubmit={() => fetchData()}
						value={values.url}
						placeholder='http://127.0.0.1:8080/home/?a=1 OR example.com'
					/>
				</Col>
				<Col>
					<Button type='primary' onClick={() => fetchData()}>
						Send
					</Button>
				</Col>
				<Col>
					<Button type='link' danger onClick={() => fetchData()}>
						Reset request
					</Button>
				</Col>
			</Row>
			<div>{loading && loadingMessage()}</div>
			{!loading && (
				<div style={{ padding: 15 }}>
					<Descriptions title='Request info' style={{ marginBottom: 15 }}>
						<Descriptions.Item label='Status code'>
							{content.status} {content.statusText}
						</Descriptions.Item>
						<Descriptions.Item label='Origin'>{'content.data'}</Descriptions.Item>
						<Descriptions.Item label='Content-Type'>{headerContent}</Descriptions.Item>
						<Descriptions.Item label='URL'>
							<a href={values.protocol + values.url} target='_blank'>
								{values.protocol + values.url}
							</a>
						</Descriptions.Item>
					</Descriptions>
					<Row gutter={[ 16, 16 ]} style={{ marginBottom: 15 }}>
						<Col span={12}>
							<TextArea
								autoSize={{ minRows: 5 }}
								value={JSON.stringify(content.headers, undefined, 2)}
								rows={4}
							/>
						</Col>
						<Col span={12}>
							<TextArea
								autoSize={{ minRows: 5 }}
								value={JSON.stringify(content.headers, undefined, 2)}
								rows={4}
							/>
						</Col>
					</Row>
					<Tabs defaultActiveKey='1'>
						<TabPane tab='HTML Response' key='1'>
							<Row justify='end' style={{ marginTop: 5 }}>
								<Col>
									<Button type='text' onClick={showModal}>
										Render the HTML
									</Button>
								</Col>
							</Row>
							<Modal
								title='HTML Response'
								onCancel={handleCancel}
								visible={isModalVisible}
								onOk={handleOk}
								width={650}
							>
								<div dangerouslySetInnerHTML={{ __html: content.data || '' }} />
							</Modal>
							<SyntaxHighlighter language='htmlbars' style={vs2015} showLineNumbers={true}>
								{content.data || ''}
							</SyntaxHighlighter>
						</TabPane>
						<TabPane tab='Comment Only' key='2'>
							{commentResponse.map((matches) => {
								return (
									<SyntaxHighlighter language='htmlbars' style={vs2015}>
										{matches};
									</SyntaxHighlighter>
								);
							})}
						</TabPane>
						<TabPane tab='Input Only' key='3'>
							{inputResponse.map((matches) => {
								return (
									<SyntaxHighlighter language='htmlbars' style={vs2015}>
										{matches};
									</SyntaxHighlighter>
								);
							})}
						</TabPane>
					</Tabs>
				</div>
			)}
		</QueueAnim>
	);
};
