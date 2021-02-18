import React, { useState } from 'react';
import { Button, Input, Typography, Menu, Dropdown, Divider, message } from 'antd';
import { CopyOutlined, DownOutlined, ArrowsAltOutlined, createFromIconfontCN } from '@ant-design/icons';
import MD5 from 'crypto-js/md5';
import SHA1 from 'crypto-js/sha1';
import SHA256 from 'crypto-js/sha256';
import SHA512 from 'crypto-js/sha512';
import Sm3 from 'sm3';
import Clipboard from 'react-clipboard.js';
import QueueAnim from 'rc-queue-anim';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const IconFont = createFromIconfontCN({
	scriptUrl: [ './iconfont.js' ]
});

function toHex(str) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		result += str.charCodeAt(i).toString(16).toUpperCase();
	}
	return result;
}
function hex2a(hex) {
	var str = '';
	for (var i = 0; i < hex.length; i += 2) str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	return str;
}

const Encode_Decode = () => {
	const [ input, setInput ] = useState('');
	const [ hashtype, setHashType ] = useState('0');
	const [ hashname, setHashname ] = useState('BASE64');
	const [ output, setOutput ] = useState('');
	const handleClick = (type) => {
		setHashType(type.key);
		resolvehashname(type.key);
	};
	const handleEncode = (hashtype) => {
		if (hashtype === 'BASE64') {
			setOutput(btoa(input));
		} else if (hashtype === 'URL') {
			setOutput(encodeURI(input));
		} else if (hashtype === 'HEX') {
			setOutput(toHex(input));
		}
	};
	const handleDecode = (hashtype) => {
		if (hashtype === 'BASE64') {
			try {
				setOutput(atob(input));
			} catch (ex) {
				setOutput('Unable to decode properly : Incorrect base64 :-( ');
				message.error('Incorrect Base64 please try something else');
			}
		} else if (hashtype === 'URL') {
			setOutput(decodeURI(input));
		} else if (hashtype === 'HEX') {
			try {
				setOutput(hex2a(input));
			} catch (ex) {
				setOutput('Unable to decode properly : Incorrect Hex :-( ');
				message.error('Incorrect HEX please try something else');
			}
		}
	};

	const successInfoHashing = () => {
		message.success('Your hash has been copied');
	};
	const resolvehashname = (hashindex) => {
		switch (hashindex) {
			case '0':
				setHashname('BASE64');
				console.log('BASE64');
				break;
			case '1':
				setHashname('URL');

				break;
			case '2':
				setHashname('HEX');
	
				break;
	
			default:
				return 'Choose the encode type';
		}
	};

	const menu = (
		<Menu onClick={handleClick}>
			<Menu.Item key='0' onClick={() => handleEncode('BASE64')}>
			BASE64
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key='1' onClick={() => handleEncode('URL')}>
			URL
			</Menu.Item>
			<Menu.Item key='2' onClick={() => handleEncode('HEX')}>
			HEX
			</Menu.Item>
		</Menu>
	);

	const handleChange = (name) => (event) => {
		setInput(event.target.value);
	};

	return (
		<QueueAnim delay={300} duration={1500}>
			<Title variant='Title level={3}' style={{ fontWeight: 'bold', margin: 15 }}>
				Encode/Decode generator
			</Title>
			<Divider dashed />
			<div key='a' style={{ margin: 15 }}>
				<TextArea
					rows={4}
					value={input}
					onChange={handleChange('input')}
					placeholder='Type something to encode/decode'
				/>
				<Dropdown overlay={menu}>
					<a className='ant-dropdown-link'>
						{hashname} <DownOutlined style={{ padding: 10 }} />
					</a>
				</Dropdown>
				<Button
					type='primary'
					style={{ marginBottom: 10, marginTop: 15, marginLeft: 15 }}
					onClick={() => handleEncode(hashname)}
				>
					<IconFont type='icon-hash' /> Encode
				</Button>
				<Button
					type='dashed'
					style={{ marginBottom: 10, marginTop: 15, marginLeft: 15 }}
					onClick={() => handleDecode(hashname)}
				>
					<IconFont type='icon-hash' /> Decode
				</Button>
			</div>
			<div key='b' style={{ margin: 15 }}>
				<TextArea
					rows={4}
					value={output}
					style={{ cursor: 'auto', marginTop: 15, color: '#777' }}
					placeholder='The results will appear here'
				/>
				<pre>Cryptographic Hash Algorithm : {hashname}</pre>
				<Clipboard component='a' data-clipboard-text={output}>
					<Button type='primary' style={{ marginBottom: 10, marginTop: 15 }} onClick={successInfoHashing}>
						<CopyOutlined /> Copy
					</Button>
				</Clipboard>
			</div>
			<Divider dashed />
		</QueueAnim>
	);
};

export default Encode_Decode;
