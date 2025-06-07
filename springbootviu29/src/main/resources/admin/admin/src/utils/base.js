const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootviu29/",
            name: "springbootviu29",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootviu29/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的高校餐厅食品留样管理系统"
        } 
    }
}
export default base
