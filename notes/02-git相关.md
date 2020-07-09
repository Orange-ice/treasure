### 本地仓库



`git config`     配置

 `git status sb`     查看信息



`git init`      初始化  （创建目录）



提交操作

`git add 文件名`

`git commit -v`    /  `git commit -m 字符串`           （--verbose）



`git log`   查看之前的提交

`git reset --head xxxxxx`      跳转版本

`git reflog`       查看所有提交





`git branch`     创建分支         `git branch -d`     删除分支

`git checkout`     切换分支

`git merge xxx`      将xxx分支 合并到 当前分支 



合并有冲突时

`git status`  查看哪个文件冲突

解决后  `git add`      无冲突后  `git commit`     (不加选项)



### 远程仓库

`ssh-keygen -t rsa -b 4096 -C 你的邮箱`             生成ssh key

`ssh -T git@github.com`               测试连接



上传操作

`git remote add origin git@xxxxxxx`

`git push -u origin master`

如提示 git pull

 运行`git pull`   再运行刚才的命令







`git clone`    下载





**一些设置**      ------简化命令

```
touch ~/.bashrc
echo 'alias ga="git add"'>> ~/.bashrc
echo 'alias gc="git commit -v"'>> ~/.bashrc
echo 'alias gl="git pull"'>> ~/.bashrc
echo 'alias gp="git push"'>> ~/.bashrc
echo 'alias gco="git checkout"'>> ~/.bashrc
echo 'alias gst="git status -sb"'>> ~/.bashrc

```

`source ~/.bashrc`



**好看的  git log**

```
alias glog="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -- | less"
```



**其他**

`git rebase`           美化历史命令  

`git stash` /   `git stash pop`



