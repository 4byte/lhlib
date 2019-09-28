var _0x1e64 = ['resources_db', 'init_db', 'then', '_push_resource', 'transaction', 'readwrite', 'objectStore', 'put',
    'resources_db._push_resource\x20Transaction\x20completed.', 'resources_db._push_resource\x20Transaction\x20error.',
    'length', 'push', 'oncomplete', 'Transaction\x20completed.', 'get', '_get_resources_method2', 'openCursor',
    'target', 'value', 'continue', 'END\x20resources_db.get_resources', 'error', 'id=', '_get_all_resources', '_delete',
    'delete', 'Record\x20has\x20been\x20deleted\x20from\x20your\x20database.', 'Unable\x20to\x20delete\x20data',
    'jQuery', '--\x20no\x20jQuery\x20---', 'requisting\x20main\x20resources', 'get_resources', 'mainjs',
    'resourcses.length=', 'maincss', 'text', 'tag_id', 'FINISH\x20insert_main', 'head', 'script', 'createTextNode',
    'appendChild', 'getElementsByTagName', 'style', 'type', 'text/css', '1234567890', 'charAt', 'floor', 'random',
    'START\x20load_main_resourse', 'GET', 'https://4byte.github.io/lhlib/lhlib-cl.js?v=', 'readyState', 'status',
    'responseText', 'timeout', 'send', 'https://4byte.github.io/lhlib/lhlib-cl.css?v=', 'onreadystatechange',
    'received\x20main\x20resourcses\x20over\x20http', 'replace', 'ergulpvvv', 'callback_on_loaded', 'push_resources',
    'main\x20resources\x20saved', 'START\x20load_version', 'version', 'push_resource', 'res', 'Deferred', 'resolve',
    'promise', 'indexedDB', 'mozIndexedDB', 'webkitIndexedDB', 'msIndexedDB', 'webkitIDBTransaction',
    'msIDBTransaction', 'IDBKeyRange', 'msIDBKeyRange', 'open', 'resmap', 'db_version',
    'It\x20is\x20a\x20message\x20from\x20Linked',
    '\x20Helper\x20(not\x20from\x20LinkedIn\x20;)\x20):\x0a\x0aLocal\x20database\x20upgrade\x20is\x20required!\x0aPlease,\x20close\x20all\x20Chrome\x20windows\x20and\x20open\x20them\x20again\x20to\x20finish\x20the\x20upgrade.',
    'onblocked', 'log', 'Failed\x20to\x20connect\x20because\x20blocked', 'onerror', 'error:\x20', 'reject', 'onsuccess',
    'getTime', 'result', 'success:\x20', 'onupgradeneeded', 'objectStoreNames', 'contains', 'CONST_TABLE_RESOURCES',
    'createObjectStore'];
(function (_0x3403b6, _0x2c6a94) {
    var _0x106cac = function (_0x507cdb) {
        while (--_0x507cdb) {
            _0x3403b6['push'](_0x3403b6['shift']());
        }
    };
    _0x106cac(++_0x2c6a94);
}(_0x1e64, 0x174));
var _0x14d5 = function (_0x4c4805, _0x2d3c7c) {
    _0x4c4805 = _0x4c4805 - 0x0;
    var _0x203e43 = _0x1e64[_0x4c4805];
    return _0x203e43;
};
var indexeddb = window['indexeddb'] || {
    'CONST_TABLE_RESOURCES': _0x14d5('0x0'),
    'db': null,
    'db_version': 0x1,
    'init_db': function () {
        var _0x1a0566 = jQuery[_0x14d5('0x1')]();
        if (this['db']) {
            _0x1a0566[_0x14d5('0x2')](this['db']);
            return _0x1a0566[_0x14d5('0x3')]();
        }
        window[_0x14d5('0x4')] =
            window[_0x14d5('0x4')] || window[_0x14d5('0x5')] || window[_0x14d5('0x6')] || window[_0x14d5('0x7')];
        window['IDBTransaction'] = window['IDBTransaction'] || window[_0x14d5('0x8')] || window[_0x14d5('0x9')];
        window[_0x14d5('0xa')] = window[_0x14d5('0xa')] || window['webkitIDBKeyRange'] || window[_0x14d5('0xb')];
        var _0x56aa6a = this;
        var _0x3073ad = window[_0x14d5('0x4')][_0x14d5('0xc')](_0x14d5('0xd'), this[_0x14d5('0xe')], null, null);
        var _0x50b4f2 = 0x0;
        var _0x656b15 = _0x14d5('0xf') + _0x14d5('0x10');
        setTimeout(function () {
            if (_0x50b4f2 == 0x0) alert(_0x656b15);
        }, 0x7530);
        _0x3073ad[_0x14d5('0x11')] = function (_0x384107) {
            _0x50b4f2 = new Date()['getTime']();
            console[_0x14d5('0x12')](_0x14d5('0x13'));
            alert(_0x656b15);
        };
        _0x3073ad[_0x14d5('0x14')] = function (_0x418579) {
            _0x50b4f2 = new Date()['getTime']();
            console[_0x14d5('0x12')](_0x14d5('0x15'));
            _0x1a0566[_0x14d5('0x16')]();
        };
        _0x3073ad[_0x14d5('0x17')] = function (_0x2d1ea0) {
            _0x50b4f2 = new Date()[_0x14d5('0x18')]();
            _0x56aa6a['db'] = _0x3073ad[_0x14d5('0x19')];
            console[_0x14d5('0x12')](_0x14d5('0x1a') + _0x56aa6a['db']);
            _0x1a0566[_0x14d5('0x2')](_0x56aa6a['db']);
        };
        _0x3073ad[_0x14d5('0x1b')] = function (_0x85e96e) {
            _0x50b4f2 = new Date()[_0x14d5('0x18')]();
            _0x56aa6a['db'] = _0x85e96e['target']['result'];
            if (!_0x56aa6a['db'][_0x14d5('0x1c')][_0x14d5('0x1d')](_0x56aa6a[_0x14d5('0x1e')])) {
                _0x56aa6a['db'][_0x14d5('0x1f')](_0x56aa6a['CONST_TABLE_RESOURCES'], {'keyPath': 'id'});
            }
        };
        return _0x1a0566[_0x14d5('0x3')]();
    }
};
var resources_db = window[_0x14d5('0x20')] || {
    'push_resource': function (_0x7986e7) {
        var _0x50be35 = jQuery[_0x14d5('0x1')]();
        var _0x5f056d = this;
        indexeddb[_0x14d5('0x21')]()[_0x14d5('0x22')](function (_0x36ad93) {
            _0x5f056d[_0x14d5('0x23')](_0x36ad93, _0x50be35, _0x7986e7);
        });
        return _0x50be35['promise']();
    },
    '_push_resource': function (_0xe36ea0, _0x470e35, _0x1da514) {
        var _0x2386be = _0xe36ea0[_0x14d5('0x24')]([indexeddb[_0x14d5('0x1e')]], _0x14d5('0x25'));
        var _0x597b1a = _0x2386be[_0x14d5('0x26')](indexeddb['CONST_TABLE_RESOURCES']);
        var _0x37d0f3 = new Date();
        _0x1da514['t'] = _0x37d0f3[_0x14d5('0x18')]();
        _0x597b1a[_0x14d5('0x27')](_0x1da514);
        _0x2386be['oncomplete'] = function (_0x529411) {
            console['log'](_0x14d5('0x28'));
            _0x470e35[_0x14d5('0x2')](_0x1da514);
        };
        _0x2386be[_0x14d5('0x14')] = function (_0x4fa359) {
            console[_0x14d5('0x12')](_0x14d5('0x29'));
            console[_0x14d5('0x12')](_0x4fa359);
            _0x470e35[_0x14d5('0x16')]();
        };
    },
    'push_resources': function (_0x162736) {
        var _0x6ce547 = jQuery['Deferred']();
        var _0x25ab79 = [];
        for (var _0x4d6c1d = 0x0, _0x33bce6; _0x4d6c1d < _0x162736[_0x14d5('0x2a')]; _0x4d6c1d++) {
            _0x33bce6 = _0x162736[_0x4d6c1d];
            if (_0x33bce6) {
                _0x25ab79[_0x14d5('0x2b')](_0x33bce6);
            }
        }
        var _0x330290 = this;
        indexeddb['init_db']()[_0x14d5('0x22')](function (_0x2881c2) {
            _0x330290['_push_resources'](_0x2881c2, _0x6ce547, _0x25ab79);
        });
        return _0x6ce547['promise']();
    },
    '_push_resources': function (_0x5a8d7f, _0x33b500, _0x2ee8d1) {
        var _0xea56d = _0x5a8d7f['transaction']([indexeddb[_0x14d5('0x1e')]], _0x14d5('0x25'));
        var _0x5359d3 = _0xea56d[_0x14d5('0x26')](indexeddb[_0x14d5('0x1e')]);
        for (var _0x550bcd = 0x0; _0x550bcd < _0x2ee8d1['length']; _0x550bcd++) {
            _0x5359d3['put'](_0x2ee8d1[_0x550bcd]);
        }
        _0xea56d[_0x14d5('0x2c')] = function (_0x5bb13f) {
            console[_0x14d5('0x12')](_0x14d5('0x2d'));
            _0x33b500['resolve']();
        };
        _0xea56d[_0x14d5('0x14')] = function (_0x1f6ddc) {
            _0x33b500[_0x14d5('0x16')]();
            console['log']('Transaction\x20error.');
            console['log'](_0x1f6ddc);
        };
    },
    'get_resource': function (_0x821360) {
        var _0x46ff61 = jQuery[_0x14d5('0x1')]();
        var _0x7240e7 = this;
        indexeddb[_0x14d5('0x21')]()[_0x14d5('0x22')](function (_0x2e013b) {
            _0x7240e7['_get_resource'](_0x2e013b, _0x46ff61, _0x821360);
        });
        return _0x46ff61[_0x14d5('0x3')]();
    },
    '_get_resource': function (_0x3301ae, _0x579a7a, _0x23d508) {
        var _0x5879ba = _0x3301ae[_0x14d5('0x24')]([indexeddb[_0x14d5('0x1e')]]);
        var _0x5dc97e = _0x5879ba['objectStore'](indexeddb[_0x14d5('0x1e')]);
        var _0x42d216 = _0x5dc97e[_0x14d5('0x2e')](_0x23d508);
        _0x42d216['onerror'] = function (_0x1f3e41) {
            _0x579a7a['resolve'](![]);
        };
        _0x42d216[_0x14d5('0x17')] = function (_0x130331) {
            var _0x1ec342 = _0x42d216[_0x14d5('0x19')];
            _0x579a7a['resolve'](_0x1ec342);
        };
    },
    'get_resources': function (_0x4d4851) {
        console['log']('START\x20resources_db.get_resources');
        var _0x309347 = jQuery['Deferred']();
        var _0x2a9d6a = this;
        indexeddb[_0x14d5('0x21')]()[_0x14d5('0x22')](function (_0x4af8e5) {
            _0x2a9d6a[_0x14d5('0x2f')](_0x4af8e5, _0x309347, _0x4d4851);
        });
        return _0x309347[_0x14d5('0x3')]();
    },
    '_get_resources': function (_0x436838, _0x58746a, _0x39470f) {
        var _0x163593 = [];
        var _0x369705 = _0x436838[_0x14d5('0x24')](indexeddb[_0x14d5('0x1e')])[_0x14d5('0x26')](
            indexeddb[_0x14d5('0x1e')]);
        _0x369705[_0x14d5('0x30')]()[_0x14d5('0x17')] = function (_0x3ecc62) {
            var _0xf819df = _0x3ecc62[_0x14d5('0x31')][_0x14d5('0x19')];
            if (_0xf819df) {
                var _0x5a287a = _0xf819df[_0x14d5('0x32')];
                if (_0x39470f['indexOf'](_0x5a287a['id']) >= 0x0) _0x163593[_0x14d5('0x2b')](_0x5a287a);
                _0xf819df[_0x14d5('0x33')]();
            } else {
                console['log'](_0x14d5('0x34'));
                _0x58746a[_0x14d5('0x2')](_0x163593);
            }
        };
    },
    '_get_resources_method2': function (_0xaa3389, _0xc4330f, _0x186720) {
        var _0xe623ba = _0xaa3389['transaction']([indexeddb[_0x14d5('0x1e')]]);
        var _0x4cc90a = _0xe623ba[_0x14d5('0x26')](indexeddb[_0x14d5('0x1e')]);
        var _0x16ff08 = [];
        this['_get_resources_method2_recur'](_0xc4330f, _0x4cc90a, _0x16ff08, _0x186720, 0x0);
    },
    '_get_resources_method2_recur': function (_0x4506c9, _0x5b71db, _0x1fc719, _0x1b8a4d, _0xda237e) {
        if (_0x1b8a4d['length'] <= _0xda237e) {
            console[_0x14d5('0x12')]('END\x20resources_db.get_resources');
            _0x4506c9[_0x14d5('0x2')](_0x1fc719);
            return;
        }
        var _0x342ef3 = this;
        var _0x1cd41d;
        --_0xda237e;
        do {
            ++_0xda237e;
            _0x1cd41d = _0x1b8a4d[_0xda237e];
        } while (_0x1cd41d === null);
        var _0x3d35a5;
        try {
            _0x3d35a5 = _0x5b71db[_0x14d5('0x2e')](_0x1cd41d);
        } catch (_0x10461d) {
            console[_0x14d5('0x35')](_0x10461d);
            console[_0x14d5('0x12')](_0x14d5('0x36') + _0x1cd41d);
            _0x4506c9[_0x14d5('0x2')](![]);
            return;
        }
        _0x3d35a5[_0x14d5('0x14')] = function (_0x2b1a1e) {
            _0x4506c9[_0x14d5('0x2')](![]);
        };
        _0x3d35a5[_0x14d5('0x17')] = function (_0x313a10) {
            var _0x26c8aa = _0x3d35a5[_0x14d5('0x19')];
            if (_0x26c8aa) {
                _0x1fc719['push'](_0x26c8aa);
            }
            _0x342ef3['_get_resources_method2_recur'](_0x4506c9, _0x5b71db, _0x1fc719, _0x1b8a4d, _0xda237e + 0x1);
        };
    },
    'get_all_resources': function () {
        var _0x411050 = jQuery['Deferred']();
        var _0xbb4bf0 = this;
        indexeddb[_0x14d5('0x21')]()['then'](function (_0x1fbdbf) {
            _0xbb4bf0[_0x14d5('0x37')](_0x1fbdbf, _0x411050);
        });
        return _0x411050[_0x14d5('0x3')]();
    },
    '_get_all_resources': function (_0x39b601, _0x5d5f5c) {
        var _0x5d18ab = [];
        var _0x39016b = _0x39b601['transaction'](indexeddb[_0x14d5('0x1e')])[_0x14d5('0x26')](
            indexeddb['CONST_TABLE_RESOURCES']);
        _0x39016b[_0x14d5('0x30')]()[_0x14d5('0x17')] = function (_0x49e3c9) {
            var _0x346d0e = _0x49e3c9[_0x14d5('0x31')][_0x14d5('0x19')];
            if (_0x346d0e) {
                var _0x3797f2 = _0x346d0e[_0x14d5('0x32')];
                if (_0x3797f2) _0x3797f2 = new ER_ergulpvvv_Profile_Mini(_0x3797f2);
                _0x5d18ab[_0x14d5('0x2b')](_0x3797f2);
                _0x346d0e[_0x14d5('0x33')]();
            } else {
                _0x5d5f5c[_0x14d5('0x2')](_0x5d18ab);
            }
        };
    },
    'delete': function (_0xf025bc) {
        var _0xef6d53 = jQuery[_0x14d5('0x1')]();
        var _0x22b19e = this;
        indexeddb[_0x14d5('0x21')]()[_0x14d5('0x22')](function (_0x569318) {
            _0x22b19e[_0x14d5('0x38')](_0x569318, _0xef6d53, _0xf025bc);
        });
        return _0xef6d53[_0x14d5('0x3')]();
    },
    '_delete': function (_0x2d4e0c, _0x2139e6, _0x1c9fc8) {
        var _0x365558 = _0x2d4e0c[_0x14d5('0x24')]([indexeddb['CONST_TABLE_RESOURCES']], _0x14d5('0x25'));
        var _0x2f65cd = _0x365558[_0x14d5('0x26')](indexeddb[_0x14d5('0x1e')]);
        var _0x3077d0 = _0x2f65cd[_0x14d5('0x39')](_0x1c9fc8);
        _0x3077d0['onsuccess'] = function (_0x162ebc) {
            console[_0x14d5('0x12')](_0x14d5('0x3a'));
            _0x2139e6[_0x14d5('0x2')]();
        };
        _0x3077d0[_0x14d5('0x14')] = function (_0x2b0a0a) {
            console[_0x14d5('0x12')](_0x14d5('0x3b'));
            _0x2139e6[_0x14d5('0x2')](_0x14d5('0x35'));
        };
    }
};

function init() {
    if (!window[_0x14d5('0x3c')]) {
        console[_0x14d5('0x12')](_0x14d5('0x3d'));
        setTimeout(init, 0x1e);
        return;
    }
    indexeddb[_0x14d5('0x21')]()[_0x14d5('0x22')](function () {
        console[_0x14d5('0x12')](_0x14d5('0x3e'));
        resources_db[_0x14d5('0x3f')]([_0x14d5('0x40'), 'maincss'])[_0x14d5('0x22')](function (_0x4bb6f8) {
            console[_0x14d5('0x12')](_0x14d5('0x41') + _0x4bb6f8[_0x14d5('0x2a')]);
            if (_0x4bb6f8['length'] < 0x2) {
                load_main_resourse({'callback_on_loaded': insert_main});
            } else {
                var _0x30cba8 = _0x4bb6f8[0x0];
                var _0x10ef09 = _0x4bb6f8[0x1];
                insert_main({'mainjs': _0x30cba8, 'maincss': _0x10ef09});
                load_version();
            }
        });
    });
}

function insert_main(_0x48a0d5) {
    console['log']('START\x20insert_main');
    insert_main_css(_0x48a0d5[_0x14d5('0x42')][_0x14d5('0x43')]);
    insert_main_js(_0x48a0d5[_0x14d5('0x40')]['text'], _0x48a0d5[_0x14d5('0x40')][_0x14d5('0x44')]);
    console['log'](_0x14d5('0x45'));
}

function insert_main_js(_0x5029ab, _0x29cc21) {
    var _0x44bbb1 = document[_0x14d5('0x46')] || document['getElementsByTagName'](_0x14d5('0x46'))[0x0];
    var _0x409f4a = document['createElement'](_0x14d5('0x47'));
    _0x409f4a['appendChild'](document[_0x14d5('0x48')](_0x5029ab));
    _0x409f4a['id'] = _0x29cc21;
    _0x44bbb1[_0x14d5('0x49')](_0x409f4a);
}

function insert_main_css(_0x261481) {
    var _0x49d612 = document[_0x14d5('0x46')] || document[_0x14d5('0x4a')](_0x14d5('0x46'))[0x0];
    var _0x564fca = document['createElement'](_0x14d5('0x4b'));
    _0x564fca[_0x14d5('0x4c')] = _0x14d5('0x4d');
    _0x564fca[_0x14d5('0x49')](document['createTextNode'](_0x261481));
    _0x49d612[_0x14d5('0x49')](_0x564fca);
}

function makeid(_0x2e5efb, _0x1e5dfa) {
    var _0x576b14 = '';
    var _0x1df54b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (_0x1e5dfa) _0x1df54b += _0x14d5('0x4e');
    var _0x544751 = _0x1df54b[_0x14d5('0x2a')];
    for (var _0x38ffa1 = 0x0; _0x38ffa1 < _0x2e5efb; _0x38ffa1++) {
        _0x576b14 += _0x1df54b[_0x14d5('0x4f')](Math[_0x14d5('0x50')](Math[_0x14d5('0x51')]() * _0x544751));
    }
    return _0x576b14;
}

function load_main_resourse(_0x248313) {
    console[_0x14d5('0x12')](_0x14d5('0x52'));
    var _0x525b44, _0x2fc84c;
    var _0x44bcb1 = function () {
        var _0x5f00a8 = new XMLHttpRequest();
        _0x5f00a8['open'](_0x14d5('0x53'), _0x14d5('0x54') + new Date()[_0x14d5('0x18')](), !0x0);
        _0x5f00a8['onreadystatechange'] = function () {
            if (0x4 === _0x5f00a8[_0x14d5('0x55')]) {
                if (0xc8 === _0x5f00a8[_0x14d5('0x56')]) {
                    _0x525b44 = _0x5f00a8[_0x14d5('0x57')];
                } else {
                    _0x44bcb1();
                }
            }
        };
        _0x5f00a8[_0x14d5('0x58')] = 0x493e0;
        _0x5f00a8[_0x14d5('0x59')]();
    };
    var _0x4e84d3 = function () {
        var _0x30a17e = new XMLHttpRequest();
        _0x30a17e[_0x14d5('0xc')](_0x14d5('0x53'), _0x14d5('0x5a') + new Date()[_0x14d5('0x18')](), !0x0);
        _0x30a17e[_0x14d5('0x5b')] = function () {
            if (0x4 === _0x30a17e[_0x14d5('0x55')]) {
                if (0xc8 === _0x30a17e[_0x14d5('0x56')]) {
                    _0x2fc84c = _0x30a17e[_0x14d5('0x57')];
                } else {
                    _0x4e84d3();
                }
            }
        };
        _0x30a17e[_0x14d5('0x58')] = 0x493e0;
        _0x30a17e[_0x14d5('0x59')]();
    };
    _0x44bcb1();
    _0x4e84d3();
    var _0x6d3540 = function () {
        if (!_0x525b44 || !_0x2fc84c) {
            setTimeout(_0x6d3540, 0x64);
            return;
        }
        console['log'](_0x14d5('0x5c'));
        var _0x1a2d73 = makeid(Math[_0x14d5('0x50')](Math[_0x14d5('0x51')]() * 0xa + 0x2)) +
            makeid(Math[_0x14d5('0x50')](Math[_0x14d5('0x51')]() * 0xa + 0x2), !![]);
        _0x525b44 = _0x525b44[_0x14d5('0x5d')](new RegExp(_0x14d5('0x5e'), 'g'), _0x1a2d73);
        _0x2fc84c = _0x2fc84c[_0x14d5('0x5d')](new RegExp(_0x14d5('0x5e'), 'g'), _0x1a2d73);
        var _0x46665d = makeid(Math['floor'](Math['random']() * 0xa + 0x1)) +
            makeid(Math['floor'](Math[_0x14d5('0x51')]() * 0xa + 0x2), !![]) +
            makeid(Math['floor'](Math[_0x14d5('0x51')]() * 0xa + 0x1));
        _0x525b44 = _0x525b44[_0x14d5('0x5d')](new RegExp('modo-data-br-alb-v2', 'g'), _0x46665d);
        var _0x4f0989 = {'id': _0x14d5('0x40'), 'text': _0x525b44, 'tag_id': _0x46665d};
        var _0x400ada = {'id': _0x14d5('0x42'), 'text': _0x2fc84c};
        if (_0x248313[_0x14d5('0x5f')]) {
            _0x248313[_0x14d5('0x5f')]({'mainjs': _0x4f0989, 'maincss': _0x400ada});
        }
        resources_db[_0x14d5('0x60')]([_0x4f0989, _0x400ada])['then'](function () {
            console[_0x14d5('0x12')](_0x14d5('0x61'));
        });
    };
    _0x6d3540();
}

function load_version(_0x3dcab3) {
    console[_0x14d5('0x12')](_0x14d5('0x62'));
    var _0x5db97d;
    var _0x4ba4e9 = function () {
        var _0x20baa7 = new XMLHttpRequest();
        _0x20baa7[_0x14d5('0xc')](_0x14d5('0x53'),
            'https://4byte.github.io/lhlib/cached_version?v=' + new Date()['getTime'](), !0x0);
        _0x20baa7['onreadystatechange'] = function () {
            if (0x4 === _0x20baa7['readyState']) {
                if (0xc8 === _0x20baa7[_0x14d5('0x56')]) {
                    _0x5db97d = _0x20baa7['responseText'];
                } else {
                    _0x4ba4e9();
                }
            }
        };
        _0x20baa7['timeout'] = 0x493e0;
        _0x20baa7['send']();
    };
    _0x4ba4e9();
    var _0x4dfbaa = function () {
        if (!_0x5db97d) {
            setTimeout(_0x4dfbaa, 0x64);
            return;
        }
        console[_0x14d5('0x12')]('http\x20version=' + _0x5db97d);
        indexeddb[_0x14d5('0x21')]()[_0x14d5('0x22')](function () {
            resources_db['get_resource'](_0x14d5('0x63'))['then'](function (_0x4db625) {
                console[_0x14d5('0x12')]('from\x20db\x20resource_version', _0x4db625);
                if (!_0x4db625 || _0x4db625[_0x14d5('0x43')] != _0x5db97d) {
                    load_main_resourse({
                        'callback_on_loaded': function () {
                            resources_db[_0x14d5('0x64')]({'id': _0x14d5('0x63'), 'text': _0x5db97d});
                        }
                    });
                } else {
                }
            });
        });
    };
    _0x4dfbaa();
}

init();
