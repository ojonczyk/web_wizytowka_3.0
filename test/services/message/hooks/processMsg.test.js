'use strict';

const assert = require('assert');
const processMsg = require('../../../../src\services\message\hooks\processMsg.js');

describe('message processMsg hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    processMsg()(mockHook);

    assert.ok(mockHook.processMsg);
  });
});
