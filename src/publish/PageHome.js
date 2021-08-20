import React, { Component } from 'react';
import PageConfig from 'publish/PageConfig';
import _ from 'lodash';

class PageHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeList = this.changeList.bind(this);
  }

  changeList(listType) {
    this.setState({ listType: listType });
  }

  render() {
    /*
s
      이름, 리액트 파일명, route url, 기획서 페이지

    */
    let list = PageConfig.list;
    let listType = this.state.listType;
    let filetedList = _.filter(list, (info) => {
      if (listType === 'ing') {
        return !info.success;
      } else if (listType === 'complete') {
        return info.success;
      }
      return true;
    });
    return (
      <div style={{ overflowX: 'auto' }}>
        <h6 style={{ color: 'red' }}>
          기획서 페이지 반영 문서 : 퍼블_페이지작업.pptx
        </h6>
        <h6>
          <a href={'#/modal'} style={{ color: 'blue' }}>
            모달 퍼블리싱 : (#/modal)
          </a>
        </h6>
        <div>
          <button
            onClick={() => this.changeList('ing')}
            style={{ background: 'yellow' }}
          >
            작업중
          </button>{' '}
          <button
            onClick={() => this.changeList('complete')}
            style={{ background: '#8897ff' }}
          >
            완료
          </button>{' '}
          <button onClick={() => this.changeList('')}>전체</button>
        </div>
        <table className="publish_tb">
          <tr>
            <th
              style={{
                border: '1px solid black',
                borderCollapse: 'collapse',
                padding: 5
              }}
            >
              index
            </th>
            <th
              style={{
                border: '1px solid black',
                borderCollapse: 'collapse',
                padding: 5
              }}
            >
              이름
            </th>
            <th
              style={{
                border: '1px solid black',
                borderCollapse: 'collapse',
                padding: 5
              }}
            >
              파일명(src/publish/page)
            </th>
            <th
              style={{
                border: '1px solid black',
                borderCollapse: 'collapse',
                padding: 5
              }}
            >
              url
            </th>
            <th
              style={{
                border: '1px solid black',
                borderCollapse: 'collapse',
                padding: 5
              }}
            >
              기획서 페이지
            </th>
            <th
              style={{
                border: '1px solid black',
                borderCollapse: 'collapse',
                padding: 5
              }}
            >
              완료여부
            </th>
            <th
              style={{
                border: '1px solid black',
                borderCollapse: 'collapse',
                padding: 5
              }}
            >
              설명
            </th>
          </tr>
          {filetedList.map((info, index) => {
            let backgroundColor = '';
            if (info.success) {
              backgroundColor = '#8897ff';
            } else {
              backgroundColor = 'yellow';
            }
            return (
              <tr style={{ backgroundColor: backgroundColor }}>
                <td
                  style={{
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                    padding: 5
                  }}
                >
                  <a style={{ color: '#000' }} href={'#' + info.url}>
                    {index + 1}
                  </a>
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                    padding: 5
                  }}
                >
                  <a
                    style={{ color: '#000' }}
                    href={'#' + info.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {info.title}
                  </a>
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                    padding: 5
                  }}
                >
                  <a
                    style={{ color: '#000' }}
                    href={
                      'vscode://file/' +
                      process.env.PROJECT_FOLDER_PATH +
                      '/src/publish/page/' +
                      info.fileName
                    }
                  >
                    {info.fileName}
                  </a>
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                    padding: 5
                  }}
                >
                  {info.url}
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                    padding: 5
                  }}
                >
                  {info.pageCount}
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                    padding: 5
                  }}
                >
                  {info.success ? '완료' : '작업중'}
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                    padding: 5
                  }}
                >
                  <pre>{info.description}</pre>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default PageHome;
