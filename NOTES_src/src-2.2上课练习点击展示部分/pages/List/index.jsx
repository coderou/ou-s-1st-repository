//最上面一般引入一些三方包
import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

// 中间引入一些自己定义的包
import { TOPIC } from "../../constans";

// 最后引入样式
import "./index.css";

export default class List extends Component {
  state = {
    users: [], // 获取到的用户列表
  };
  //挂载成功,订阅话题
  componentDidMount() {
    // 这个token,有没有必要加到state中?
    //没有必要,因为token跟试图渲染无关
    this.token = PubSub.subscribe(TOPIC, (msg, data) => {
      // console.log('接收到数据', data)

      if (data.length === 0) return;
      // 发送请求
      this.props.getUserDataAsync(data);
    });
  }

  // 卸载的时候取消订阅
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  handle = (flag) => (e) => {
    this.props.setFlagCreator(flag); //不是action的creator,包装了一次,但是数据是可以传递的
  };
  render() {
    let { users, flag } = this.props;
    console.log(users, flag);

    // 对数据进行根据flag的过滤
    if (flag === "ray") {
      users = users.filter((item) => {
        return item.login === "ray";
      });
    }

    if (users.length > 0) {
      return (
        <>
          <div>
            <button onClick={this.handle("all")}>all</button>
            <button onClick={this.handle("ray")}>ray</button>
          </div>
          <div className="row">
            {users.map((user) => (
              <div className="card" key={user.id}>
                <a target="_blank">
                  <img
                    src={user.avatar_url}
                    style={{ width: 100, height: 100 }}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            ))}
          </div>
        </>
      );
    }

    // 什么都不渲染,就return 一个 null
    return null;
  }
}
