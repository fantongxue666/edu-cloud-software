# SpringCloud工程
**[Spring Boot 2.0 最全使用教程 Finchley版本](https://blog.csdn.net/forezp/article/details/70148833)**

**功能地址**
- eureka服务注册中心：[http://localhost:8080/](http://localhost:8080/)
- 消息总线更新Git云配置（post请求，可使用postman发送，端口是服务的端口）：[http://localhost:8082/actuator/bus-refresh](http://localhost:8082/actuator/bus-refresh)

**各个服务说明**
- [edu-cloud-eureka]()：服务注册中心（eureka）
- [edu-cloud-power]()：服务（角色和权限）
- [edu-cloud-test]()：服务（测试专用）
- [edu-cloud-zuul]()：服务网关（路由转发，监控，过滤）
- [edu-cloud-config-server]()：分布式配置中心（方便服务配置文件统一管理，实时更新，配置文件置于Git仓库）
