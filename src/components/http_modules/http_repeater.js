import React , {useState} from 'react';
import { Button, message, Typography, Row, Col, Search,Input,Select } from 'antd';
import { createFromIconfontCN , RightOutlined } from '@ant-design/icons';
import  PersistedState from 'use-persisted-state';
import QueueAnim from 'rc-queue-anim';
import Clipboard from 'react-clipboard.js';


const { Title, Paragraph } = Typography;
const IconFont = createFromIconfontCN({
	scriptUrl: [ './iconfont.js' ]
});

export default (props) => {


        const useCacheURL = PersistedState('url')

	 

    const { TextArea } = Input;
 
    const [url,setUrl] = useCacheURL('')
	const [ values, setValues ] = useState({
		url: ''
    });

    const [size, setSize] = useState('small');


	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};

    const selectBefore = (
        <Select defaultValue="http://" className="select-before" primary background={{backgroundColor: 'blue'}}>
          <Option value="http://">http://</Option>
          <Option value="https://">https://</Option>
        </Select>
      );
    
    const taburl = () => {
        // const data =  chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, 
        // function (tabs) {
        //     var url = tabs[0].url;
        //     console.log(url)
        // });

        chrome.tabs.query({
            active: true,
            currentWindow: true
          }, (tabs) => {
            
            const protocol = tabs[0].url.split(/^(http|https):\/\//)[1]
            const hostname = tabs[0].url.split(/^(http|https):\/\//)[2]
              alert(JSON.stringify({protocol,hostname}))
             setUrl(tabs[0].url)
            // return hostname
            // return({protocol,hostname})

        })
    }

    const loadurl = x =>     {
            alert(url)
    }
    const windowmode = () => {
        
        
        return chrome.windows.create({url: chrome.extension.getURL("index.html"), type: "popup"});
    }


	return (
		<QueueAnim delay={300} duration={1500}>
			<Title variant='Title level={3}' style={{ fontWeight: 'bold', margin: 15 }}>
				HTTP Repeater
			</Title>
			<Paragraph style={{ margin: 15 }}>
				A reverse shell is a shell session established on a connection that is initiated from a remote machine,
				not from the local host.
			</Paragraph>
			<div style={{ padding: 15 }}>
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col span={16}>
                         <Input addonBefore={selectBefore}defaultValue="mysite" 
                         value={values.url}
                         suffix={ <Button type="primary" shape="circle"
                          icon={<RightOutlined />} />}/>	 
					</Col>  
                    
					
				</Row>
			</div>
            <div style={{ marginBottom: 16 }}>
            </div>
                <Button onClick={() => windowmode() }>Load in window</Button>
                <Button onClick={() => (taburl()) }>Load URL</Button>
                <Button onClick={() => (loadurl()) }>alert URL</Button>
           
           <Row>
            <Col span={12}>
                <TextArea  rows={4} />
            </Col>
            <Col span={11}>
                <TextArea  rows={4} />
            </Col>
           </Row>
		</QueueAnim>
	);
};
