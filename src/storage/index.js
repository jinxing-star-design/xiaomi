// 定义仓库名
const STORAGE_KEY = 'mall';
export default {
    // 存储值
    setItem(key,value,module_name) { 
        if(module_name) {
            let val = this.getStorage(module_name);
            val[key] = value;
            this.setItem(module_name,val)
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
        }
        

    },
    // 获取某一个模块下面的属性，比如user下面的userName
    getItem(key,module_name) {
        if(module_name) {
           let val = this.getItem(module_name)
           if(val) return val[key];
        }
        return this.getStorage()[key];

    },
    // 获取整个浏览器中环境信息，在这里是mall
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    // 清空数据
    clear(key,module_name) {
        let val = this.getStorage();
        if(module_name) {
            if (!val[module_name])return;
            delete val[module_name][key];
        }else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));

    }
}