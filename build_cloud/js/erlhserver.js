var _0x8836 = ['status', 'responseText', 'request', 'ERLHSERVER\x20END\x20Send', 'init', 'log',
    'ERLHSERVER\x20is\x20HERE', 'erlhserver', 'started', 'bind', 'initObserverForErlhRequestCont', 'requests',
    'ERLHSERVER\x20is\x20INITED', 'createElement', 'div', 'erlh-server-response', 'elResponseCont', 'body',
    'appendChild', 'ERLHSERVER\x20END\x20createResponseCont', 'START\x20ERLH-SERVER\x20writeMessage\x20ID=',
    'stringify', 'END\x20ERLH-SERVER\x20writeMessage\x20ID=', 'getElementById', 'innerText', 'remove',
    'END\x20ERLH-SERVER\x20readMessage\x20ID=', 'bodyObserver', 'bodyObserverCallback', 'querySelector',
    'erlh-server-request', 'elRequestCont', 'disconnect', 'readMessage',
    'START\x20ERLH-SERVER\x20waitForErlhRequestCont',
    'One\x20of\x20your\x20extensions\x20disrupts\x20connection\x20with\x20Linked\x20Helper\x20server\x20or\x20your\x20network\x20connection\x20is\x20unstable!!!\x20\x0aPlease,\x20disable\x20it\x20and\x20reload\x20the\x20page.\x0a\x0a\x20Click\x203-dots\x20or\x20the\x20orange\x20button\x20at\x20the\x20top\x20right\x20of\x20Chrome\x20window\x20->\x20\x22More\x20tools\x22\x20->\x20\x22Extensions\x22\x0a\x0aThen\x20disable\x20all\x20other\x20extensions.\x20\x0a\x0aIf\x20it\x20doesn\x27t\x20help,\x20please\x20contact\x20us\x20info@linkedhelper.com',
    'initBodyObserver', 'readAllRequests', 'observerErlhRequestCont', 'observe',
    'END\x20ERLH-SERVER\x20initObserverForErlhRequestCont', 'length', 'method', 'POST', 'requestHeader', 'Content-Type',
    'application/json;charset=UTF-8', 'url', 'setRequestHeader', 'onreadystatechange', 'internal_options',
    'external_options'];
(function (_0x3dce1b, _0x20201b) {
    var _0x4faf95 = function (_0x27dde2) {
        while (--_0x27dde2) {
            _0x3dce1b['push'](_0x3dce1b['shift']());
        }
    };
    _0x4faf95(++_0x20201b);
}(_0x8836, 0x13d));
var _0xd533 = function (_0x3e0911, _0x4babf8) {
    _0x3e0911 = _0x3e0911 - 0x0;
    var _0xc506b1 = _0x8836[_0x3e0911];
    return _0xc506b1;
};
console[_0xd533('0x0')](_0xd533('0x1'));
var erlhserver = window[_0xd533('0x2')] || {
    'init': function () {
        if (this[_0xd533('0x3')]) return;
        if (!document['body']) {
            setTimeout(this['init'][_0xd533('0x4')](this), 0x64);
            return;
        }
        console[_0xd533('0x0')]('ERLHSERVER\x20START\x20INIT');
        this[_0xd533('0x3')] = !![];
        this[_0xd533('0x5')]();
        this[_0xd533('0x6')] = {};
        console[_0xd533('0x0')](_0xd533('0x7'));
    }, 'createResponseCont': function () {
        console['log']('ERLHSERVER\x20START\x20createResponseCont');
        this['elResponseCont'] = document[_0xd533('0x8')](_0xd533('0x9'));
        this['elResponseCont']['id'] = _0xd533('0xa');
        this[_0xd533('0xb')]['hidden'] = !![];
        document[_0xd533('0xc')][_0xd533('0xd')](this['elResponseCont']);
        console['log'](_0xd533('0xe'));
    }, 'writeMessage': function (_0x47ddfa, _0x486654) {
        console[_0xd533('0x0')](_0xd533('0xf') + _0x47ddfa);
        var _0x3333be = document[_0xd533('0x8')](_0xd533('0x9'));
        _0x3333be['id'] = _0x47ddfa;
        _0x3333be['innerText'] = JSON[_0xd533('0x10')](_0x486654);
        this[_0xd533('0xb')][_0xd533('0xd')](_0x3333be);
        console[_0xd533('0x0')](_0xd533('0x11') + _0x47ddfa);
    }, 'readMessage': function (_0x55ce0c) {
        console[_0xd533('0x0')]('START\x20ERLH-SERVER\x20readMessage\x20ID=' + _0x55ce0c);
        var _0x4ab700 = document[_0xd533('0x12')](_0x55ce0c);
        var _0x3c34b5 = JSON['parse'](_0x4ab700[_0xd533('0x13')]);
        _0x4ab700[_0xd533('0x14')]();
        console['log'](_0x3c34b5);
        console[_0xd533('0x0')](_0xd533('0x15') + _0x55ce0c);
        return _0x3c34b5;
    }, 'initBodyObserver': function () {
        this[_0xd533('0x16')] = new MutationObserver(this[_0xd533('0x17')]['bind'](this));
        this[_0xd533('0x16')]['observe'](document[_0xd533('0x18')](_0xd533('0xc')),
            {'attributes': ![], 'childList': !![], 'characterData': ![]});
    }, 'bodyObserverCallback': function (_0xb68831) {
        this['elRequestCont'] = document[_0xd533('0x12')](_0xd533('0x19'));
        if (this[_0xd533('0x1a')]) {
            this[_0xd533('0x5')]();
            this[_0xd533('0x16')][_0xd533('0x1b')]();
        }
    }, 'executeMessage': function (_0x517d1f) {
        var _0x232eaf = this[_0xd533('0x1c')](_0x517d1f);
        this['send'](_0x232eaf, {'id': _0x517d1f});
    }, 'waitForErlhRequestCont': function (_0x5439f7, _0x1896b8) {
        if (!_0x1896b8) _0x1896b8 = 0x0;
        console[_0xd533('0x0')](_0xd533('0x1d'));
        this[_0xd533('0x1a')] = document[_0xd533('0x12')]('erlh-server-request');
        if (this[_0xd533('0x1a')]) {
            _0x5439f7(this[_0xd533('0x1a')]);
        } else {
            if (_0x1896b8 == 0x258) {
                alert(_0xd533('0x1e'));
            }
            var _0x106fc3 = this;
            setTimeout(function () {
                _0x106fc3['waitForErlhRequestCont'](_0x5439f7, _0x1896b8 + 0x1);
            }, 0x64);
        }
    }, 'initObserverForErlhRequestCont': function () {
        console['log']('START\x20ERLH-SERVER\x20initObserverForErlhRequestCont');
        if (!this[_0xd533('0x1a')]) {
            this[_0xd533('0x1f')]();
            return;
        }
        this['createResponseCont']();
        this[_0xd533('0x20')]();
        var _0x4591c1 = new MutationObserver(this[_0xd533('0x21')][_0xd533('0x4')](this));
        _0x4591c1[_0xd533('0x22')](this['elRequestCont'], {'attributes': ![], 'childList': !![], 'characterData': ![]});
        console[_0xd533('0x0')](_0xd533('0x23'));
    }, 'observerErlhRequestCont': function (_0x8e8167) {
        this[_0xd533('0x20')]();
    }, 'readAllRequests': function () {
        console[_0xd533('0x0')]('START\x20ERLH-SERVER\x20readAllRequests');
        var _0x1fd608 = this['elRequestCont']['childNodes'];
        for (var _0x3f0199 = 0x0, _0x2416bd; _0x3f0199 < _0x1fd608[_0xd533('0x24')]; _0x3f0199++) {
            _0x2416bd = _0x1fd608[_0x3f0199];
            try {
                this['executeMessage'](_0x2416bd['id']);
            } catch (_0x139b52) {
                console['log']('ERLH-SERVER\x20ERROR\x20executeMessage:');
                console['error'](_0x139b52);
            }
        }
        console[_0xd533('0x0')]('END\x20ERLH-SERVER\x20readAllRequests');
    }, 'send': function (_0x5ab544, _0x56e72a) {
        console[_0xd533('0x0')]('ERLHSERVER\x20START\x20Send');
        console[_0xd533('0x0')](_0x5ab544);
        console[_0xd533('0x0')](_0x56e72a);
        var _0x4835f9 = _0x5ab544[_0xd533('0x25')] ? _0x5ab544[_0xd533('0x25')] : _0xd533('0x26');
        var _0x4557c1 = _0x5ab544[_0xd533('0x27')] ? _0x5ab544[_0xd533('0x27')] : {};
        _0x4557c1[_0xd533('0x28')] = _0x4557c1[_0xd533('0x28')] ? _0x4557c1[_0xd533('0x28')] : _0xd533('0x29');
        var _0x2fc476 = this;
        var _0xb39aa4 = new XMLHttpRequest();
        _0xb39aa4['open'](_0x4835f9, _0x5ab544[_0xd533('0x2a')]);
        var _0x411d33 = Object['keys'](_0x4557c1);
        for (var _0x16eeed = 0x0, _0x1bddc6, _0x2174ae; _0x16eeed < _0x411d33[_0xd533('0x24')]; _0x16eeed++) {
            _0x1bddc6 = _0x411d33[_0x16eeed];
            _0x2174ae = _0x4557c1[_0x1bddc6];
            _0xb39aa4[_0xd533('0x2b')](_0x1bddc6, _0x2174ae);
        }
        _0xb39aa4[_0xd533('0x2c')] = function () {
            if (_0xb39aa4['readyState'] == XMLHttpRequest['DONE']) {
                console[_0xd533('0x0')](_0xd533('0x2d'));
                console[_0xd533('0x0')](_0x56e72a);
                console[_0xd533('0x0')](_0xd533('0x2e'));
                console['log'](_0x5ab544);
                var _0x3f1493 = {'status': _0xb39aa4[_0xd533('0x2f')], 'responseText': _0xb39aa4[_0xd533('0x30')]};
                console[_0xd533('0x0')]('result');
                console[_0xd533('0x0')](_0x3f1493);
                _0x2fc476['writeMessage'](_0x56e72a['id'], _0x3f1493);
            }
        };
        _0xb39aa4['send'](_0x5ab544[_0xd533('0x31')]);
        console[_0xd533('0x0')](_0xd533('0x32'));
    }
};
erlhserver[_0xd533('0x33')]();
