/**
 * @Author ：sean
 * @Date ：2019/4/22
 */


const header_nav = `
<div class="nav index">
    <div class="layui-container">
        <!-- 公司logo -->
        <div class="nav-logo">
            <a href="{{d.key==='index'?'.':'..'}}/index.html">
                <img src="{{d.key==='index'?'.':'..'}}/static/img/logo.png" alt="网络公司">
            </a>
        </div>
        <div class="nav-list">
        <!--导航菜单-->
            <ul class="layui-nav">
                <li class="layui-nav-item {{d.key==='index'?'layui-this':''}} "><a href="{{d.key==='index'?'.':'..'}}/index.html">首页</a></li>
                <li class="layui-nav-item {{d.key==='product'?'layui-this':''}}"><a href="{{d.key==='index'?'.':'..'}}/product/index.html">公司服务</a></li>
                <li class="layui-nav-item {{d.key==='cases'?'layui-this':''}}"><a href="{{d.key==='index'?'.':'..'}}/cases/index.html">合作案例</a></li>
                <li class="layui-nav-item {{d.key==='news'?'layui-this':''}}"><a href="{{d.key==='index'?'.':'..'}}/news/index.html">行业资讯</a></li>
                <li class="layui-nav-item {{d.key==='about'?'layui-this':''}}"><a href="{{d.key==='index'?'.':'..'}}/about/index.html">关于我们</a></li>
            </ul>
        </div>
    </div>
</div>
`;


const footer = `
<div class="footer">
    <div class="layui-container">
        <div class="layui-row footer-contact">
        
            <div class="layui-col-xs12 layui-col-sm6 layui-col-md8">
                ©2019-2022 杭州喜淘科技有限公司 / 喜淘 / 浙ICP备11018329号-5
            </div>
            
            <div class="layui-col-xs12 layui-col-sm6 layui-col-md4">
           
              <div class="layui-col-xs6 layui-col-sm6 layui-col-md6">
              
              
            
              qq二维码
              
              
              </div>
              <div class="layui-col-xs6 layui-col-sm6 layui-col-md6">
              
              
              
              微信二维码
              
          
              
              </div>
                  
            </div>
        
            <!--<div class="layui-col-sm16 layui-col-md16 ">-->
                <!--©2019-2022 杭州喜淘科技有限公司 / 喜淘 / 浙ICP备11018329号-5-->
            <!--</div>-->
            <!---->
               <!--<div class="layui-col-sm16 layui-col-md16 ">-->
                <!--©2019-2022 杭州喜淘科技有限公司 / 喜淘 / 浙ICP备11018329号-5-->
            <!--</div>-->

        </div>
    </div>
</div>
`;


export {
    header_nav,
    footer
}





