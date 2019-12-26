
<template>
    <div class="login">
        <div class="loginbox">
            <div class="header">
                <div class="logo">My Demo</div>
                <div class="selectLogin">
                    <!-- <div class="theWay" style="margin-right: 20px;">
            <p
              @click="chat"
              :style="pasdIn?'color: rgba(255,255,255,0.7);':'color: rgba(255,255,255,1);'"
            >微信登陆</p>
            <p class="point" v-if="chatIn"></p>
          </div>
          <div class="theWay">
            <p
              @click="pasd"
              :style="chatIn?'color: rgba(255,255,255,0.7);':'color: rgba(255,255,255,1);'"
            >密码登录</p>
            <p class="point" v-if="pasdIn"></p>
                    </div>-->
                </div>
            </div>
            <!-- <div class="chat" v-if="chatIn">
        <img src="../../assets/img/logo.png" class="chat-img">
            </div>-->
            <div v-if="pasdIn">
                <div class="logPut" style="height: 72px;" @click="nameFocus">
                    <label class="type" style="line-height: 72px;">用户名</label>
                    <input
                        type="text"
                        class="userInput"
                        v-model="userName"
                        style="height: 72px;"
                        ref="name"
                    />
                </div>
                <div
                    class="logPut"
                    style="height: 77px;background: rgba(255, 255, 255, 0.23);"
                    @click="passFocus"
                >
                    <label class="type" style="line-height: 77px;">密码</label>
                    <input
                        :type="pasType"
                        class="userInput"
                        v-model="password"
                        style="height: 77px;"
                        ref="pass"
                    />
                </div>
                <div class="footer">
                    <div class="log" @click="log">登 录</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {login} from "../../api/api"
export default {
    data() {
        return {
            chatIn: false,
            pasdIn: true,
            pasType: "password",
            userName: "",
            password: "",
            rember: false
        };
    },
    created() {
        // localStorage.clear();
        if (
            localStorage.getItem("userName") != null &&
            localStorage.getItem("passWord") != null
        ) {
            this.userName = localStorage.getItem("userName");
            this.password = localStorage.getItem("passWord");
        }
    },
    methods: {
        pasd() {
            this.chatIn = false;
            this.pasdIn = true;
        },
        chat() {
            this.chatIn = true;
            this.pasdIn = false;
        },
        dispPas() {
            this.pasType = this.pasType == "text" ? "password" : "text";
        },
        nameFocus() {
            this.$refs.name.focus();
        },
        passFocus() {
            this.$refs.pass.focus();
        },
        remember() {
            this.rember = !this.rember;
        },
        log() {
            if (this.userName.length == 0) {
                this.$message.error("用户名不能为空");
            } else if (this.password.length == 0) {
                this.$message.error("密码不能为空");
            }
            login({username:this.userName,password:this.password}).then(res=>{
                if(res.code == 200){
                    this.$router.push({path:'/'})
                    sessionStorage.setItem('token',res.token)
                    sessionStorage.setItem('userInfo',JSON.stringify(res.data))
                }
            })
            // localStorage.setItem('userName', this.userName);
            // localStorage.setItem('passWord', this.password);
            // console.log(localStorage.getItem('userName'),localStorage.getItem('passWord'))
        }
    }
};
</script>
<style lang="scss" scoped>
.login {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../assets/img/login.png);
    background-size: 100% 100%;
    :-webkit-autofill {
        -webkit-text-fill-color: #fff !important;
        transition: background-color 5000s ease-in-out 0s;
    }
    @-webkit-keyframes autofill {
        to {
            color: #fff;
            background: transparent;
        }
    }
    @-moz-keyframes autofill {
        to {
            color: #fff;
            background: transparent;
        }
    }
    .loginbox {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -244.5px;
        margin-left: -200px;
        width: 400px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);

        .header {
            .logo {
                text-align: center;
                padding-top: 32px;
                font-size: 48px;
                font-family: RTWSYueGoTrial-Regular;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 48px;
            }
            .selectLogin {
                text-align: center;
                padding-top: 24px;
                padding-bottom: 23px;
                .theWay {
                    cursor: pointer;
                    display: inline-block;
                    font-size: 18px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    .point {
                        margin: 0 auto;
                        width: 6px;
                        height: 6px;
                        background: #fff;
                        border-radius: 50%;
                    }
                }
            }
        }
        .chat {
            position: relative;
            width: 400px;
            height: 328px;
            background: rgba(255, 255, 255, 0.2986);
            // opacity: 0.2986;
            .chat-img {
                position: absolute;
                width: 264px;
                top: 32px;
                left: 68px;
            }
        }
        .logPut {
            overflow: hidden;
            padding: 0 40px;
            font-size: 18px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            background: rgba(255, 255, 255, 0.135);
            // opacity:0.135;

            .type {
                float: left;
                display: inline-block;
                color: rgba(255, 255, 255, 1);
                cursor: default;
                width: 111px;
                .userName {
                    font-size: 18px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    height: 72px;
                }
            }
        }
        .footer {
            padding: 24px 40px;
            .remember {
                margin-left: 12px;
                font-size: 12px;
                line-height: 20px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
            }
            .log {
                text-align: center;
                margin-top: 38px;
                width: 320px;
                height: 63px;
                line-height: 63px;
                cursor: default;
                background: linear-gradient(
                    270deg,
                    rgba(95, 154, 255, 1) 0%,
                    rgba(110, 119, 255, 1) 100%
                );
                box-shadow: 0px 2px 10px 0px rgba(68, 71, 116, 0.5);
                border-radius: 5px;
                font-size: 20px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                //   line-height:28px;
            }
        }
    }
}
</style>
<style>
input:-webkit-autofill {
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
}
input:-moz-autofill {
    -moz-animation-name: autofill;
    -moz-animation-fill-mode: both;
}
.userInput {
    float: left;
    outline: none;
    padding: 0;
    background: rgba(255, 255, 255, 0);
    border: 0;
    width: 180px;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 25px;
}

.userInput[type="password"] {
    letter-spacing: 12px;
    font-size: 8px;
    color: rgba(255, 255, 255, 1);
}
</style>

