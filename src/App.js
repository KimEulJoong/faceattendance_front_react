import React from 'react';
import './App.css';
import {Header, Button, Input, Divider,Segment,Table,Image} from 'semantic-ui-react'
import logo from "./logo.png"

function App() {
  return ( 
    <div className='App'>
      <Header as='h1'>
      <Image size='large' circular src={logo} /> 출석부
      </Header>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button.Group buttons={['출석현황', '주차별 현황', '강좌 선택']} />
      <Button content='로그인' style={{ marginLeft: '1050px',  }} />
      </div>
      <Divider inverted />
      <Segment>
      <div style={{ display: 'flex', alignItems: 'center' }}>  
      <Segment compact style={{ margin: '0 0 0 0' }}>이름</Segment>
      <Input size = 'big' action ='검색' placeholder='Search...' />
      <h3 className='lecture'>캡스톤디자인</h3>
      </div>
      </Segment>
      <Divider inverted />
      <div>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>번호</Table.HeaderCell>
            <Table.HeaderCell>이름</Table.HeaderCell>
            <Table.HeaderCell>학번</Table.HeaderCell>
            <Table.HeaderCell>학과(전공)</Table.HeaderCell>
            <Table.HeaderCell>1주</Table.HeaderCell>
            <Table.HeaderCell>2주</Table.HeaderCell>
            <Table.HeaderCell>3주</Table.HeaderCell>
            <Table.HeaderCell>4주</Table.HeaderCell>
            <Table.HeaderCell>5주</Table.HeaderCell>
            <Table.HeaderCell>6주</Table.HeaderCell>
            <Table.HeaderCell>7주</Table.HeaderCell>
            <Table.HeaderCell>8주</Table.HeaderCell>
            <Table.HeaderCell>9주</Table.HeaderCell>
            <Table.HeaderCell>10주</Table.HeaderCell>
            <Table.HeaderCell>11주</Table.HeaderCell>
            <Table.HeaderCell>12주</Table.HeaderCell>
            <Table.HeaderCell>13주</Table.HeaderCell>
            <Table.HeaderCell>14주</Table.HeaderCell>
            <Table.HeaderCell>15주</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>고종현</Table.Cell>
            <Table.Cell>2020038043</Table.Cell>
            <Table.Cell>컴퓨터공학과</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>김을중</Table.Cell>
            <Table.Cell>2017015026</Table.Cell>
            <Table.Cell>컴퓨터공학과</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>민웅기</Table.Cell>
            <Table.Cell>2018024261</Table.Cell>
            <Table.Cell>컴퓨터공학과</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>서범석</Table.Cell>
            <Table.Cell>2017037024</Table.Cell>
            <Table.Cell>컴퓨터공학과</Table.Cell>
            <Table.Cell warning>지각</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>이중현</Table.Cell>
            <Table.Cell>2017037011</Table.Cell>
            <Table.Cell>컴퓨터공학과</Table.Cell>
            <Table.Cell warning>지각</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
            <Table.Cell >출석</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>N</Table.Cell>
            <Table.Cell negative>결석</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>N</Table.Cell>
            <Table.Cell negative>결석</Table.Cell>
            <Table.Cell warning>지각</Table.Cell>
            <Table.Cell warning>지각</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>N</Table.Cell>
            <Table.Cell negative>결석</Table.Cell>
            <Table.Cell negative>결석</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </div>
    </div>
  );
}

export default App; //function App 이후 App으로 내보내고, index.js에서 import App하고 root로 불러와서 index.html에서 보여짐