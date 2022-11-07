/*
 * https://commitlint.js.org/#/reference-rules
 * <type>(<scope>): <subject> // 空一行<body>// 空一行<footer>
 * 1、type 是用于说明该 commit 的类型的: 如下：
 * feat：新功能 feature
 * update：更新某功能
 * fix：修补某功能的bug fixbug
 * refactor：重构某个功能，没有新加的功能或修改的bug refactor
 * format：代码格式化
 * style：仅样式改动
 * test: 测试
 * docs：仅文档新增 / 改动
 * deps：依赖升级
 * perf: 优化构建工具或运行时性能
 * config：配置文件修改、构建过程或辅助工具的变动
 * revert：回滚到上一个版本
 * build：编译相关的修改，例如发布版本、对项目构建或者依赖的改动
 *
 * 2、scope 是说明 commit 影响的范围，建议填写影响的功能模块
 * 3、subject 是对于该 commit 目的的简短描述
 * */

/*
 *rule配置说明:：rule由name和配置数组组成，如：'name:[0, 'always', 72]'，
 *数组中第一位为level，可选0,1,2，0为disable，1为warning，2为error，
 *第二位为应用与否，可选always|never，
 *第三位该rule的值。
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    //   'body-leading-blank': [2, 'always'],
    //   'body-empty' : [2, 'never'],
    // 'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2, // type必须输入
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'style', // 修改格式，删除代码空格、缩进等
        'docs', // 文档、注释修改
        'refactor', // 代码重构，没有功能修改
        'merge', // 代码合并
        'revert', // 版本回滚
        'chore', // 构建过程或辅助工具的变动
        'test',
        'perf',
        'build',
        'ci',
        'revert',
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
};
