# SpringCloud工程
**[Spring Boot 2.0 最全使用教程 Finchley版本](https://blog.csdn.net/forezp/article/details/70148833)**

**功能地址**
- eureka服务注册中心：[http://localhost:8080/](http://localhost:8080/)
- 消息总线更新Git云配置（post请求，可使用postman发送，端口是服务的端口）：[http://localhost:8082/actuator/bus-refresh](http://localhost:8082/actuator/bus-refresh)
- test模块接口文档地址（后台管理系统接口）：[http://localhost:8083/api-test/doc.html](http://localhost:8083/api-test/doc.html)


**各个服务说明**
- [edu-cloud-eureka]()：服务注册中心（eureka）
- [edu-cloud-power]()：服务（微信小程序业务接口模块）
- [edu-cloud-test]()：服务（为后台管理系统提供所有接口）
- [edu-cloud-zuul]()：服务网关（路由转发，监控，过滤）
- [edu-cloud-config-server]()：分布式配置中心（方便服务配置文件统一管理，实时更新，配置文件置于Git仓库）
- [edu-weixin]()：微信小程序（用户端）
- [edu-vue-forward]()：后台管理系统（管理员端）
