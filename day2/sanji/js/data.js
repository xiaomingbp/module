define(function() {
    //模拟数据
    var arr = [
        {
            name: "河北省",
            children: [
                {
                    name: "石家庄市",
                    children: [
                        {
                            name: "鹿泉县"
                        }, 
                        {
                            name: "惊险县"
                        }
                    ]
                }
            ]
        },
        {
            name: "山东省",
            children: [
                {
                    name: "济南市",
                    children: [
                        {
                            name: "济南县"
                        }, 
                        {
                            name: "惊险县"
                        }
                    ]
                }
            ]
        }
    ]
    
    return arr
})