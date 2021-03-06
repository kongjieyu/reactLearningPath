import React from 'react'
import { NavBar, Icon, List, InputItem, TextareaItem, Button, WhiteSpace } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { update } from '../../redux/user.redux'

@connect(
    state => state.user,
    {update}
)

class GeniusInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            desc: ''
        }
        this.logout = this.logout.bind(this)
    }
    logout(){
        console.log('logoutttt')
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
        console.log('onChange')
    }
    render(){
        const path = this.props.location.pathname
        const redirct = this.props.redirctTo
        return (
            <div>
                {redirct&&redirct!==path?<Redirect to={this.props.redirectTo}></Redirect>:null}
                <NavBar mode="dark">牛人 完善信息页面</NavBar>
                {/* 因为在boss页面和牛人页面都需要用到选择头像，所以将选择头像这部分写成组件 */}
                <AvatarSelector
                    selectAvatar = {(imgname)=>{
                        this.setState({
                            avatar: imgname
                        })
                    }}
                ></AvatarSelector>
                <InputItem
                    onChange={(v) => { this.onChange('title', v)}}
                    //可以通过console.log来进行打印看效果，下面这行是用来测试的
                    >求职岗位
                </InputItem>
                <TextareaItem
                    title="个人简介"
                    row = {3}
                    autoHeight
                    onChange={(v) => { this.onChange('desc', v)}}
                    >
                </TextareaItem>
                <WhiteSpace/>
                <Button
                    onClick = {() => {
                        this.props.update(this.state)
                    }}
                    type='primary'>保存</Button>
                <Button onClick={this.logout} type='primary'>
                退出登陆
                </Button>
            </div>

        )
    }
}

export default GeniusInfo