import React from 'react';
import { Typography, Divider, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

const { Title, Paragraph } = Typography;

export default (props) => (
	<QueueAnim delay={300} duration={1500}>
		<Title
			variant='Title level={3}'
			style={{
				fontWeight: 'bold',
				margin: 15
			}}
		>
			About us
		</Title>
		<div
			key='a'
			style={{
				padding: 15,
				marginTop: 15
			}}
		>
			<Paragraph>HackTools is created by Ludovic COULON and Riadh BOUCHAHOUA</Paragraph>
			<Paragraph>HackTools is customed by SonPD2</Paragraph>
			<a href='https://nhantien.momo.vn/0978220328' target='_blank' rel='noreferrer noopener'>
				<img
					src='https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png'
					alt='MOMO'
					style={{
						height: 41,
						width: 174
					}}
				/>
			</a>
		</div>
		<Divider dashed />
		<div
			key='b'
			style={{
				padding: 15,
				marginTop: 15
			}}
		>
			<Title variant='Title level={3}'> Credits </Title> <Paragraph> PentestMonkey </Paragraph>
			<Paragraph> GTFOBins </Paragraph> <Paragraph> Antd </Paragraph> <Paragraph> Iconfont CN </Paragraph>
			<Paragraph> John Hammond </Paragraph> <Paragraph> The Noun Project </Paragraph>
			<Paragraph> PayloadsAllTheThings </Paragraph>
			<Paragraph> Fabien LOISON(flozz) for the p0wny @shell </Paragraph>
		</div>
	</QueueAnim>
);
