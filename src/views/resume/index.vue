<template>
    <div id="resume">

        <!--STICKER-->
        <div id="sticker"></div>

        <div id="wrapper">

            <!--BIO TITLE-->
            <h2 id="titleName" class="sectionHead">张易</h2>
            <!-- <a href='./张易-19年.pdf' download="张易-19应届-计算机.pdf">下载</a> -->
            <!--BIO-->
            <!--BIO PARAGRAPH-->
            <div id="aboutme">
                <div class="imgwap">
                    <img alt="" class="avatar width-full rounded-2" height="200"
                         v-bind:src="user.photo" width="200">
                </div>
                <p><span>年龄：23
                    <br/>手机：{{user.phone}}
                    <br/>邮箱：{{user.email}}
                    <br/>户籍：{{user.native}}
                    <br/>目前状态：{{user.status}}
                    <br/>所在地点：{{user.city}}
                    <br/>工作年限：{{user.year}} 年
                    <br/>期望职位：{{user.expect}}
                    <br/>
                </span>
                </p>
            </div>
            <!--            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAAAAADYoy0BAAADW0lEQVR4nOzd0WrcvBpA0ZND3/+V+997oELok7MH1rpNxp5mI7Ary/rzv5f9/fvvn//8/Pv3nz/fPf70+ab9/93TsSJIjCAxgsQIEiNIjCAxH1fZu9fxyxMsrvOnj/+0uq84vS869Ty+ERIjSIwgMYLECBIjSIwgMcv5kN35gNP5iNXxpu8jTu8zpv8+RkiMIDGCxAgSI0iMIDGCxLz+XNbK6jp9977j9HxvM0JiBIkRJEaQGEFiBIkRJCZ3HzKtdp+xYoTECBIjSIwgMYLECBIjSMzyPuS3r+NP14nfnh+Z/vsYITGCxAgSI0iMIDGCxAgS83Ef8vb7oXbtru+Yfh/W7b+PERIjSIwgMYLECBIjSIwgMX9+e77j6dvWlU8zQmIEiREkRpAYQWIEiREkZvne3un//7+9zvz0+/72v98IiREkRpAYQWIEiREkRpCY7f1Dbs9X7J5v+vefbs/HPD9vhMQIEiNIjCAxgsQIEiNIzPE+hrf3I5++j1kd//b8x+r4RkiMIDGCxAgSI0iMIDGCxPycXoe/vc/g6ffZ9fZ8jxESI0iMIDGCxAgSI0iMIDEf9yHjJ7j8HNPb+7GvnN4HGSExgsQIEiNIjCAxgsQIEnP8XNbHAYfnC26f//b8ze7PjZAYQWIEiREkRpAYQWIEiRlfp376+ytv72/y9nNiRkiMIDGCxAgSI0iMIDGCxCz3U991+zmsp+n3Ye2afk7MCIkRJEaQGEFiBIkRJEaQmOV9yO3nkG4/xzW9/mP1+d1/n+ey4gSJESRGkBhBYgSJESTm+jr15Re4vD/66XzF6fl3j2+ExAgSI0iMIDGCxAgSI0jMy6st7q8nmX5/1u39UZ6MkBhBYgSJESRGkBhBYgSJ+Xgua3p+ZHWdPv1c1NP0+o/Tz1un/mUEiREkRpAYQWIEiREkZnt9yMrt6/bddeu73396fsP+IV9OkBhBYgSJESRGkBhBYsbfl/W20/dpPd3ef33FCIkRJEaQGEFiBIkRJEaQmK+7Dzl9Dmv3/VW7n1/x3t4vI0iMIDGCxAgSI0iMIDHj+6l/nODyPobT7+WdXoe++/2MkBhBYgSJESRGkBhBYgSJ+fX3ZU2/3+q22/u5GyExgsQIEiNIjCAxgsQIEvNfAAAA///9Z/GLf9fGEQAAAABJRU5ErkJggg==">-->
            <!--end bio-->

            <div class="clear"></div>

            <!--SKILLS TITLE-->
            <h2 id="tools" class="sectionHead">技能</h2>

            <!--SKILLS-->
            <ul id="skills">
                <!--////////////////////////////////////////////////////////////////////////////////////-->
                <!--请注意，班级名称表示您的技能的百分比。 即s70 = 70％，s40 = 40％. -->
                <!--////////////////////////////////////////////////////////////////////////////////////-->
                <!-- <li id="skill1" class="s100"><span>.NET 框架开发（C#、ASP.net、MVC等）</span></li>
                <li id="skill2" class="s90"><span>Java 开发（SSH、SSM框架）</span></li>
                <li id="skill3" class="s90"><span>前端开发（JQuery、Angular、Bootstrap、ES6）</span></li>
                <li id="skill4" class="s80"><span>Linux平台使用（CentOS、Ubuntu）</span></li>
                <li id="skill5" class="s90"><span>NodeJS开发</span></li>
                <li id="skill6" class="s100"><span>Android开发</span></li>
                <li id="skill7" class="s100"><span>H5 Web APP（PhoneGap、Ionic）</span></li>
                <li id="skill9" class="s60"><span>IOS开发</span></li>
                <li id="skill8" class="s90"><span>数据库（SQLserver、MySQL、MongoDB、Redis）</span></li>
                 -->
                <li id="skill1" class="s70"><span>Java</span></li>
                <li id="skill2" class="s50"><span>Spring MVC</span></li>
                <li id="skill3" class="s40"><span>Spring Boot</span></li>
                <li id="skill4" class="s70"><span>Linux平台使用（CentOS、Ubuntu）</span></li>
                <li id="skill5" class="s60"><span>Python3</span></li>
                <li id="skill6" class="s40"><span>React(ant.design) ， umi</span></li>
                <li id="skill7" class="s60"><span>关系数据库（MySQL、MariaDB）</span></li>
                <li id="skill8" class="s30"><span>非关系数据库（Redis、Mangodb）</span></li>
                <li id="skill9" class="s40"><span>docker,docker-compose,k8s,docker-swarm</span></li>
            </ul>
            <!-- end skills -->


            <div class="clear"></div>

            <!--EXPERIENCE TITLE-->
            <h2 id="clock" class="sectionHead">经历</h2>

            <!--EXPERIENCE-->
            <ul id="jobs">
                <li>
                    <div class="details">
                        <h3>江苏科技大学</h3>
                        <!-- <h4>江苏镇江</h4> -->
                        <h5>2018年3月 - 2018年12月</h5>
                    </div>
                    <h3>经历</h3>
                    <p> 参与基于Spring MVC、Mybatis3的数据可视化展现服务后端搭建。</p>
                    <p> 数据可视化前端展现，完成H5 数据展现代码。</p>
                    <br>
                    <p><a>成长</a></p>
                    <p>学会JAVA编程学习方法，将多个学科知识相互融合到一起。</p>
                    <p>学会对需求有了思考能力。</p>
                    <!-- <p>	在职期间负责mysql查表操作。</p>	 -->
                </li>
                <li>
                    <div class="details">
                        <h3>杭州大搜车汽车服务公司</h3>
                        <!-- <h4></h4> -->
                        <h5>2018年11月 - 2019年3月</h5>
                    </div>
                    <h3>经历</h3>
                    <p>
                        1.服务迁移——将车商服务从原来Node逻辑调用转变为新的Java服务，其中运用了ORM，Redis、MongoDB、Dobbo、zk、mq等技术，由原来串行操作转换为Java8并行流操作，优化客户体验。
                    </p>
                    <p>2.买手服务——服务端基于Antd构建管理页面，完成一小部分数据库表设计，开发线索查询服务，以及项目与其他子项目的数据打通。</p>
                    <br>
                    <p><a>成长</a></p>
                    <p> 理解MVC思想，学会基本的Spring MVC企业级开发，对系统微服务拆分有了一点理解。</p>
                    <p> 简单的理解react，学会基于公司后端封装的antd开发的React页面，根据后台业务，创建简单的antd业务组件。</p>
                    <p> 了解了服务之间如何通过中间件进行服务解耦。 </p>
                    <p> 学会代码review，学习别人的长处。</p>
                </li>
            </ul><!--end jobs-->

            <!--EDUCATION TITLE-->
            <div class="clear"></div>
            <h2 id="learn" class="sectionHead">教育</h2>

            <!--EDUCATION-->
            <ul id="schools">
                <li>
                    <div class="details">
                        <h3><font><font>江苏科技大学</font></font></h3>
                        <h4><font><font>本科学历</font></font></h4>
                        <h5><font><font>2015 - 2019年</font></font></h5>
                    </div>
                    <p><font><font>计算机科学与技术</font></font></p>
                </li>
            </ul><!--end schooling-->

            <div class="clear"></div>

            <!--HONORS / AWARDS TITLE-->
            <h2 id="ribbon" class="sectionHead">荣誉</h2>

            <!--HONORS / AWARDS-->
            <ul id="honorsAwards" style="display: block;">
                <li><a href="
		https://murphyyi.oss-cn-beijing.aliyuncs.com/%E7%BD%91%E6%98%93%E4%BA%91%E8%AF%BE%E5%A0%82.jpg"><font><font>网易云课堂
                    获得python数据分析师 微专业优秀证书</font></font></a></li>
                <li><a href="
		https://murphyyi.oss-cn-beijing.aliyuncs.com/%E8%BE%A9%E6%89%8B.jpg"><font><font>获得
                    计算机学院辩论比赛“最佳辩手”称号</font></font></a></li>
                <li><a href="
		https://murphyyi.oss-cn-beijing.aliyuncs.com/%E5%A5%96.JPG"><font><font>获得 校互联网+比赛获得校三等奖</font></font></a></li>

            </ul><!--end honorsAwards-->

            <div class="clear"></div>

            <!--AS SEEN ON TITLE-->
            <h2 id="eye" class="sectionHead">作品</h2>

            <!--AS SEEN ON-->
            <ul id="seenOn">
                <li class="bwWrapper"><a href="game/index.html"><img
                        src="http://murphyyi.oss-cn-beijing.aliyuncs.com/1.png" alt="超级马里奥"/></a></li>
                <li class="bwWrapper"><a href="https://zy84338719.github.io"><img
                        src="http://murphyyi.oss-cn-beijing.aliyuncs.com/2.png" alt="个人博客"/></a></li>
                <li class="bwWrapper"><a href="https://www.murphyyi.com"><img
                        src="http://murphyyi.oss-cn-beijing.aliyuncs.com/3.png" alt="个人网站"/></a></li>
                <li class="bwWrapper"><a href="http://zy64334678.imwork.net:8888"><img
                        src="http://murphyyi.oss-cn-beijing.aliyuncs.com/4.png" alt="docker jupyter 多语言版"/></a></li>
                <!-- <li class="bwWrapper"><img src="assets/works/3.jpg" alt="pic3" /></li>  -->
            </ul><!--end seenOn-->

            <div class="clear"></div>

            <!--RECOMMENDATIONS TITLE-->
            <h2 id="chat" class="sectionHead">个人评价</h2>

            <!--RECOMMENDATIONS-->
            <ul id="recommends" style="display: block;">
                <p>
                    <font><font>“自己是一名喜欢折腾的用户，玩过黑苹果，搞过树莓派，DIY智能家居。性格有点内向，属于慢热型选手，爱参加开发者大会，喜欢挑战。乐观积极，热爱生活，酷爱旅游，思维活奋的小伙子。”</font></font>
                </p>
            </ul>
            <!-- <ul id="recommends" style="display: block;">

                    <li><h3><font><font>客户</font></font></h3></li>

                    <li>
                        <div class="details">
                            <h3><font><font>布朗</font></font></h3>
                            <h4><font><font>摄影师</font></font></h4>
                        </div>
                        <p><font><font>“帮助我搭建了一个摄影作品合集网站，非常的完美，王小明是一个不错的开发者”</font></font></p>
                    </li>
                <li>
                    <div class="details">
                        <h3><font><font>贺幛</font></font></h3>
                        <h4><font><font>企业家</font></font></h4>
                    </div>
                    <p><font><font>“帮我们设计的网站非常的不错，我们非常的满意，帮助我们提升了企业品质，有利于我们的形象宣传“</font></font></p>
                </li>

            </ul> -->
            <!-- end recommends -->

            <div class="clear"></div>


        </div><!--end wrapper-->

        <!--COPYRIGHT-->
        <div id="copyright">&copy; 2014 - 2020 - Designed and developed by Murphyyi.</div>

    </div>
</template>

<script lang="ts">
    import './style.css';
    // import './print.css';
    // import './prettyPhoto.css'
    import {getInfoByKeyword} from '@/api/resume'
    // import da from "element-ui/src/locale/lang/da";
    export default {
        // 数据
        data() {
            return {
                user: {
                    code: "",
                    name: "张易",
                    phone: "110",
                    describe: "5",
                    sex: false,
                    status: "离职",
                    birthday: "2020-04-22T13:21:01+08:00",
                    photo: "7",
                    email: "zy8338719@hotmail.com",
                    wechat: "murphyyi",
                    github: "https://github.com/zy84338719",
                    native: "北京",
                    city: "北京",
                    keyword: "w",
                    watch: 20,
                    expect: "后端研发"
                }

            }
        },

        // // 计算属性
        // computed: {}
        //     // 侦听器
        //     | undefined
        // // 侦听器
        // watch: {}
        //     // 生命周期钩子
        //     | undefined
        //
        // 生命周期钩子
        // beforeCreate() {
        // },
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        created() {
            this.getInfo()
        },
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // beforeMount() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // mounted() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // beforeUpdate() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // updated() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // activated() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // deactivated() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // beforeDestroy() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // destroyed() {
        // }

        // 事件处理方法
        methods: {
            getInfo(): void {
                getInfoByKeyword({keyword: "w"}).then(
                    (data: object) => {
                        this.user = data.user
                    }
                )
            }
        }
    }
</script>

<style>
    #resume {
        /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
        line-height: 1.2em;
        background-color: #f3f3f3;
        background-image: url(../../assets/soft_wallpaper.png);
        background-repeat: repeat;
        background-attachment: fixed;
        background-position: 0px 0px;
        color: #444;
        height: 100%;
        width: auto;
        /*margin-top: 60px;*/
    }
</style>
