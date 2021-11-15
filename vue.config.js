module.exports={
    publicPath:'./',
    outputDir:'dist',
    assetsDir:'',
    indexPath:'index.html',
    pages:{
        mine:{
            entry:'src/views/pages/mine/mine.js',
            template:'public/mine.html',
            filename:'mine.html',
            title:'广告宣传页'
        },
        index:{
            entry:'src/main.js',
            template:'public/index.html',
            filename:'index.html',
            title:'首页',
            chunks:['chunk-vendors','chunk-common','index'] 
        }
    },
    // devServer:{
    //     host:'localhost',
    //     port:'8080',
    //     https:'false',
    //     hotonly:true,
    //     open:false,
    //     historyApiFallback:{
    //         index:'/index.html'
    //     }
    // }
}