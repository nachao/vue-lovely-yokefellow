var expect = require('chai').expect;
import { addNum } from './index'

describe('测试index.js', function() {
  describe('测试addNum函数', function() {
    it('两数相加结果为两个数字的和', function() {
      expect(addNum(1,2)).to.be.equal(3);
    });
  });
});