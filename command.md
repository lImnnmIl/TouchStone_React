#工具命令
##nvm

nvm install     //安装最新版本nvm
nvm list（同 *nvm ls*）     // 查找本电脑上所有的node版本
nvm use ***<version>***     // 切换node版本
nvm current       //显示当前版本
nvm version      //查看当前的版本

##npm

npm config list       //查看npm主要配置包含：npm仓库地址，cwd路径，根目录等配置信息
npm config ls -l     //查看全部npm默认配置
npm -v      // 查看Npm版本
npm config set registry <url>    //修改全局配置到**镜像**
npm config get key     //查看config中key对应的配置项
npm config set key=value     //设置config中key对应的配置项值为value
npm ls      //查看当前安装的包依赖关系
npm uninstall       // 卸载包
npm -help (aliase -h)         // 查看帮助信息
npm install -h   // 查看安装相关的命令帮助

##nrm

nrm ls　　// 查看所有的支持源（有*号的表示当前所使用的源,以下[name]表示源的名称）
nrm use [name]　　// 将npm下载源切换成指定的源
nrm help　　// 查看nrm帮助
nrm home [name]　　// 跳转到指定源的官网