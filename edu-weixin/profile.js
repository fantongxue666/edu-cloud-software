const current='dev'
const profiles={
  'dev':{
    url:'http://localhost:8083'
  },
  'prod':{
    url:'https://edu.tiger2.cn'
  }
}

const env=profiles[current]
export {env}