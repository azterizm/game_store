import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StatusBar as StatusBarNative } from 'react-native'
import logo from './assets/favicon.png'
import { categories as categoriesList } from './constants/data';
import Text from './components/Text'

export default function App() {
	const [selected, setSelected] = useState<string>('All')
	return (
		<Container style={{ paddingTop: StatusBarNative.currentHeight }}>
			<StatusBar style='light' />
			<Header>
				<Text>
					Hello <Text bold>Abdullah</Text>{'\n'}
					<Text bold>Best games for you today</Text>
				</Text>
				<Avatar source={logo} />
			</Header>
			<Categories horizontal showsHorizontalScrollIndicator={false}>
				{categoriesList.map((c, i) => (
					<Category key={i} onPress={() => setSelected(c)}>
						<CategoryName selected={selected === c}>{c}</CategoryName>
					</Category>
				))}
			</Categories>
			<Text primary bold>Hello</Text>
			<Text secondary light>Hello</Text>
			<Text tertiary center>Hello</Text>
		</Container>
	);
}

const Container = styled.SafeAreaView`
	flex: 1;
	background: #343434;
`

const Header = styled.View`
	margin: 16px 32px 0 32px;
	justify-content: space-between;
	align-items:center;
	flex-direction: row;
`

const Avatar = styled.Image`
	width: 30px;
	height: 30px;
`

const Categories = styled.ScrollView`
	margin-top: 32px;
	flex-grow: 0;
`

const Category = styled.TouchableOpacity`
	align-items:center;
	margin: 0 16px;
	height: 32px;
`

const CategoryName = styled(Text)`
 	color: ${(props: { selected: boolean }) => props.selected ? '#819ee5' : '#ffffff'};
 	font-weight: ${(props: { selected: boolean }) => props.selected ? '700' : '500'}
 `
