# 工具命令
## nvm

    nvm install latest //安装最新版本的node
    nvm install [version][arch] //安装指定版本的node 例如：nvm install 10.16.3 安装node v10.16.3 arch表示电脑的位数 如果电脑需要安装32位的， 则运行：nvm install 10.16.3 32
    nvm uninstall [version] //卸载node
    nvm list（同 *nvm ls*）     // 查找本电脑上所有的node版本
    nvm use ***<version>***     // 切换node版本
    nvm current       //显示当前版本
    nvm version      //查看当前的版本
    nvm -h //查看nvm的指令
    nvm list available //查看可以安装的node版本

## npm

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

## nrm

    nrm ls　　// 查看所有的支持源（有*号的表示当前所使用的源,以下[name]表示源的名称）
    nrm use [name]　　// 将npm下载源切换成指定的源
    nrm help　　// 查看nrm帮助
    nrm home [name]　　// 跳转到指定源的官网





# 新建项目
## 在 TypeScript 中使用

    $ yarn create react-app antd-demo-ts --template typescript

    $ npx create-react-app antd-demo-ts --typescript




# 关于git
## 查看分支 git branch [-r | -a]：

    1.git branch查看本地所有分支

    2.git branch -r查看远程所有分支

    3.git branch -a查看本地和远程所有分支

    一般当前本地分支前带有“*”号且为绿色，远程分支为红色

## 新建分支 git branch [-f] <branchname>：
    新建一个分支，但不切换。

    你可以使用 git checkout -b <branchname> 新建并切换至新分支

## 删除分支 git branch (-d | -D) <branchname>：

    1.git branch -d <branchname>删除本地分支，其中<branchname>为本地分支名

    2.git branch -d -r <branchname>删除远程分支，其中<branchname>为本地分支名

    删除后，还要推送到服务器上才行，即git push origin :<branchname>
    使用-D则表示强制删除，相当于 --delete --force

## 重命名分支 git branch (-m | -M) <oldbranch> <newbranch>：

    使用-M则表示强制重命名。

    如果需要重命名远程分支，推荐的做法是：
        1.删除远程待修改分支
        2.push本地新分支名到远程

## git 中一些选项解释
    -d  --delete：删除

    -D  --delete --force的快捷键

    -f  --force：强制

    -m  --move：移动或重命名

    -M  --move --force的快捷键

    -r  --remote：远程

    -a  --all：所有