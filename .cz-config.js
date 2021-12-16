'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: 'feat:     新的功能'},
    {value: 'fix',      name: 'fix:      修复Bug'},
    {value: 'docs',     name: 'docs:     只有文档变更'},
    {value: 'style',    name: 'style:    空格, 分号等格式修复'},
    {value: 'refactor', name: 'refactor: 代码重构，注意和特性、修复区分开'},
    {value: 'perf',     name: 'perf:     提升性能'},
    {value: 'test',     name: 'test:     添加测试'},
    {value: 'chore',    name: 'chore:    开发工具变动(构建、脚手架工具等)'},
    {value: 'revert',   name: 'revert:   代码回退'},
  ],

//   scopes: [],

  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    // scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: '表示此更改的范围(可选):',
    subject: '短说明(必填):\n',
    body: '长说明，使用"|"换行(可选):\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交commit记录?'
  },

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],

  // limit subject length
  subjectLimit: 100

};
