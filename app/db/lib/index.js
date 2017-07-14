import {AsyncStorage} from 'react-native'

class Db {

    constructor (app = 'test', setting = {}) {
        this.app = app
        this.cache = setting['cache'] || ''
        this.expire = setting['expire'] || 1000 * 3600 * 24
        this.maxCache = setting['maxCache'] || 1000
        this.count = 0 //cache Count
        if(!setting['AsyncStorage']) {
            throw new Error('rns should init with AsyncStorage, please import before use')
        }
        this._db = setting['AsyncStorage'];
    }
    
    translator(key, data) {
        if (data && typeof data !== 'string') {
            data = JSON.stringify(data)
        }
        return data
    }

    checkKey(key) {
        if (!key || typeof key !== 'string') {
            throw new Error(`rns error, key must be a String, but find ${typeof key, key}`)
        }
    }
    
    //callback function
    cbf(err, res, cb) {
        if(typeof cb === 'function') {
            return cbf(err, res)
        }
        return new Promise((resolve, reject) => {
            if(err) {
                return reject(err)
            }
            return resolve(res)
        })
    }


    SET(key, data, cb) {
        this.checkKey(key)
        data = this.translator(data)
        return this._db.setItem(key, data, (err, res) => {
            err && console.error(`rns.setItem error, key : ${key}, ${err}`)
            this.cbf(err, res, cb)
        })
    }

    SETSYNC(key, data) {
        this.checkKey(key)
        data = this.translator(data)
        try {
            const value = await this._db.setItem(key, data)
            return value
        } catch (err) {
            throw new Error(`rns.SETSYNC error, key: ${key}, ${err}`)
        }
    }

    GET(key, cb) {
        this.checkKey(key)
        return this._db.getItem(key, (err, res) => {
            err && console.error(err)
            this.cbf(err, res, cb)
        })
    }

    GETSYNC(key) {
        this.checkKey(key)
        const value = await this._db.getItem(key)
        return value
    }

    DEL(key, cb) {
        this.checkKey(key)
        return this._db.removeItem(key, (err, res) => {
            this.cbf(err, res, cb)
        })
    }    
    
    GETKEYS(cb) {
        return AsyncStorage.getAllKeys((err, res) => {
            this.cbf(err, res, cb)
        })
    }
    
    /** set Cache, will destroyed when app shutdown */
    SETC(key, data, expire) {
        this.checkKey(key)
        expire = expire || this.expire
        if(expire) {
            let time = new Date(new Date().getTime() + expire)
            data = Object.assign(data, {[`${this.app}_expire`]: time})
        }
        this.cache[key] = data
        this.count ++
        if(this.maxCache < this.count + 100) {
            console.warn('your cache will be full')
        }
    }
    
    /** set Cache ,when key is not exist, or will be Error, you can use callback for check */
    SETCX(key, data, expire, cb = null) {
        if(typeof expire === 'function') {
            cb = expire
            expire = null
        }
        if(this.cache[key]) {
            const ct = `this key is already exists in Cache : ', ${key}`
            if (typeof cb === 'function') {
                console.error(ct, data)
            }
            throw new Error(ct)
        }
        this.SETC(key, data, expire)
        return (typeof cb === 'function') && cb(null, this.GETC(key, expire))
    } 

    DELC(key, cb){
        if(typeof cb === 'function') {
            try {
                let v = this.GETC(key)
                delete this.cache[key]
                return cb(null, v)
            } catch (err) {
                console.error('DELC error ', error)
                return cb(err, v)
            }
        }
        delete this.cache[key]
    }

    DELALLC() {
        this.cache = {}
        return this.count
    }
    
    /** flag: get Cache with expire */
    GETC(key, flag) {
        this.checkKey(key)
        let expireKey = `${this.app}_expire`
        let {expireKey: expireTime} = this.cache[key]
        if(expireTime) {
            let now = new Date().getTime()
            if(now > expireTime) {
                this.DELC(key, null)
                return null
            }
        }
        let v = this.cache[key]
        if(flag) {
            delete v[expireKey]
        }
        return v;
    }
}

export default Db