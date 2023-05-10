// Generated from Structure.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import StructureListener from './StructureListener.js';
import StructureVisitor from './StructureVisitor.js';

const serializedATN = [4,1,29,170,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,5,0,40,8,
0,10,0,12,0,43,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,52,8,1,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,5,
6,93,8,6,10,6,12,6,96,9,6,3,6,98,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
5,8,109,8,8,10,8,12,8,112,9,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,3,10,121,8,
10,1,11,1,11,1,11,1,11,5,11,127,8,11,10,11,12,11,130,9,11,3,11,132,8,11,
1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,
15,3,15,149,8,15,1,16,1,16,1,16,1,16,1,16,5,16,156,8,16,10,16,12,16,159,
9,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,0,0,19,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,1,1,0,5,11,166,0,41,1,0,0,0,
2,51,1,0,0,0,4,53,1,0,0,0,6,60,1,0,0,0,8,67,1,0,0,0,10,78,1,0,0,0,12,87,
1,0,0,0,14,101,1,0,0,0,16,105,1,0,0,0,18,113,1,0,0,0,20,120,1,0,0,0,22,122,
1,0,0,0,24,135,1,0,0,0,26,139,1,0,0,0,28,141,1,0,0,0,30,148,1,0,0,0,32,150,
1,0,0,0,34,162,1,0,0,0,36,167,1,0,0,0,38,40,3,2,1,0,39,38,1,0,0,0,40,43,
1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,5,
0,0,1,45,1,1,0,0,0,46,52,3,4,2,0,47,52,3,6,3,0,48,52,3,8,4,0,49,52,3,10,
5,0,50,52,3,28,14,0,51,46,1,0,0,0,51,47,1,0,0,0,51,48,1,0,0,0,51,49,1,0,
0,0,51,50,1,0,0,0,52,3,1,0,0,0,53,54,5,1,0,0,54,55,5,20,0,0,55,56,5,28,0,
0,56,57,5,22,0,0,57,58,3,22,11,0,58,59,5,21,0,0,59,5,1,0,0,0,60,61,5,2,0,
0,61,62,5,20,0,0,62,63,5,28,0,0,63,64,5,22,0,0,64,65,3,22,11,0,65,66,5,21,
0,0,66,7,1,0,0,0,67,68,5,3,0,0,68,69,5,20,0,0,69,70,5,28,0,0,70,71,5,22,
0,0,71,72,5,28,0,0,72,73,5,22,0,0,73,74,5,27,0,0,74,75,5,22,0,0,75,76,5,
28,0,0,76,77,5,21,0,0,77,9,1,0,0,0,78,79,5,4,0,0,79,80,5,20,0,0,80,81,5,
28,0,0,81,82,5,22,0,0,82,83,5,28,0,0,83,84,5,22,0,0,84,85,3,12,6,0,85,86,
5,21,0,0,86,11,1,0,0,0,87,97,5,16,0,0,88,98,5,25,0,0,89,94,3,14,7,0,90,91,
5,22,0,0,91,93,3,14,7,0,92,90,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,
1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,97,88,1,0,0,0,97,89,1,0,0,0,97,98,1,
0,0,0,98,99,1,0,0,0,99,100,5,17,0,0,100,13,1,0,0,0,101,102,3,16,8,0,102,
103,5,14,0,0,103,104,3,16,8,0,104,15,1,0,0,0,105,110,5,28,0,0,106,107,5,
23,0,0,107,109,5,28,0,0,108,106,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,
110,111,1,0,0,0,111,17,1,0,0,0,112,110,1,0,0,0,113,114,5,28,0,0,114,115,
5,24,0,0,115,116,3,20,10,0,116,19,1,0,0,0,117,121,3,26,13,0,118,121,3,24,
12,0,119,121,3,22,11,0,120,117,1,0,0,0,120,118,1,0,0,0,120,119,1,0,0,0,121,
21,1,0,0,0,122,131,5,16,0,0,123,128,3,18,9,0,124,125,5,22,0,0,125,127,3,
18,9,0,126,124,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,
132,1,0,0,0,130,128,1,0,0,0,131,123,1,0,0,0,131,132,1,0,0,0,132,133,1,0,
0,0,133,134,5,17,0,0,134,23,1,0,0,0,135,136,5,18,0,0,136,137,3,20,10,0,137,
138,5,19,0,0,138,25,1,0,0,0,139,140,7,0,0,0,140,27,1,0,0,0,141,142,3,30,
15,0,142,143,5,15,0,0,143,144,5,28,0,0,144,29,1,0,0,0,145,149,3,32,16,0,
146,149,3,34,17,0,147,149,3,36,18,0,148,145,1,0,0,0,148,146,1,0,0,0,148,
147,1,0,0,0,149,31,1,0,0,0,150,151,5,12,0,0,151,152,5,20,0,0,152,157,3,30,
15,0,153,154,5,22,0,0,154,156,3,30,15,0,155,153,1,0,0,0,156,159,1,0,0,0,
157,155,1,0,0,0,157,158,1,0,0,0,158,160,1,0,0,0,159,157,1,0,0,0,160,161,
5,21,0,0,161,33,1,0,0,0,162,163,5,13,0,0,163,164,5,20,0,0,164,165,3,30,15,
0,165,166,5,21,0,0,166,35,1,0,0,0,167,168,5,28,0,0,168,37,1,0,0,0,10,41,
51,94,97,110,120,128,131,148,157];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class StructureParser extends antlr4.Parser {

    static grammarFileName = "Structure.g4";
    static literalNames = [ null, null, null, null, null, "'string'", "'reference'", 
                            "'integer'", "'float'", "'boolean'", "'datetime'", 
                            "'bytes'", "'funnel'", "'invert'", "'->'", "'='", 
                            "'{'", "'}'", "'['", "']'", "'('", "')'", "','", 
                            "'.'", "':'", "'*'", "'-'" ];
    static symbolicNames = [ null, "V", "M", "R", "F", "STRING", "REFERENCE", 
                             "INTEGER", "FLOAT", "BOOLEAN", "DATETIME", 
                             "BYTES", "FUNNEL", "INVERT", "ARROW", "EQUALS", 
                             "LC", "RC", "LS", "RS", "LP", "RP", "COMMA", 
                             "DOT", "COLON", "STAR", "MINUS", "QUANTIFIER", 
                             "ID", "WS" ];
    static ruleNames = [ "struct", "def", "v_def", "m_def", "r_def", "f_def", 
                         "field_pair_list", "field_pair", "fieldRef", "field", 
                         "type", "map_type", "multi_value", "single_value", 
                         "l_def", "expr", "funnel", "invert", "subject" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = StructureParser.ruleNames;
        this.literalNames = StructureParser.literalNames;
        this.symbolicNames = StructureParser.symbolicNames;
    }



	struct() {
	    let localctx = new StructContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, StructureParser.RULE_struct);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268447774) !== 0)) {
	            this.state = 38;
	            this.def();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this.match(StructureParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	def() {
	    let localctx = new DefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, StructureParser.RULE_def);
	    try {
	        this.state = 51;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.v_def();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.m_def();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.r_def();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 49;
	            this.f_def();
	            break;
	        case 12:
	        case 13:
	        case 28:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 50;
	            this.l_def();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	v_def() {
	    let localctx = new V_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, StructureParser.RULE_v_def);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(StructureParser.V);
	        this.state = 54;
	        this.match(StructureParser.LP);
	        this.state = 55;
	        this.match(StructureParser.ID);
	        this.state = 56;
	        this.match(StructureParser.COMMA);
	        this.state = 57;
	        this.map_type();
	        this.state = 58;
	        this.match(StructureParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	m_def() {
	    let localctx = new M_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, StructureParser.RULE_m_def);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(StructureParser.M);
	        this.state = 61;
	        this.match(StructureParser.LP);
	        this.state = 62;
	        this.match(StructureParser.ID);
	        this.state = 63;
	        this.match(StructureParser.COMMA);
	        this.state = 64;
	        this.map_type();
	        this.state = 65;
	        this.match(StructureParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	r_def() {
	    let localctx = new R_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, StructureParser.RULE_r_def);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(StructureParser.R);
	        this.state = 68;
	        this.match(StructureParser.LP);
	        this.state = 69;
	        this.match(StructureParser.ID);
	        this.state = 70;
	        this.match(StructureParser.COMMA);
	        this.state = 71;
	        this.match(StructureParser.ID);
	        this.state = 72;
	        this.match(StructureParser.COMMA);
	        this.state = 73;
	        this.match(StructureParser.QUANTIFIER);
	        this.state = 74;
	        this.match(StructureParser.COMMA);
	        this.state = 75;
	        this.match(StructureParser.ID);
	        this.state = 76;
	        this.match(StructureParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	f_def() {
	    let localctx = new F_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, StructureParser.RULE_f_def);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(StructureParser.F);
	        this.state = 79;
	        this.match(StructureParser.LP);
	        this.state = 80;
	        this.match(StructureParser.ID);
	        this.state = 81;
	        this.match(StructureParser.COMMA);
	        this.state = 82;
	        this.match(StructureParser.ID);
	        this.state = 83;
	        this.match(StructureParser.COMMA);
	        this.state = 84;
	        this.field_pair_list();
	        this.state = 85;
	        this.match(StructureParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field_pair_list() {
	    let localctx = new Field_pair_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, StructureParser.RULE_field_pair_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(StructureParser.LC);
	        this.state = 97;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 25:
	        	this.state = 88;
	        	this.match(StructureParser.STAR);
	        	break;
	        case 28:
	        	this.state = 89;
	        	this.field_pair();
	        	this.state = 94;
	        	this._errHandler.sync(this);
	        	_la = this._input.LA(1);
	        	while(_la===22) {
	        	    this.state = 90;
	        	    this.match(StructureParser.COMMA);
	        	    this.state = 91;
	        	    this.field_pair();
	        	    this.state = 96;
	        	    this._errHandler.sync(this);
	        	    _la = this._input.LA(1);
	        	}
	        	break;
	        case 17:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 99;
	        this.match(StructureParser.RC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field_pair() {
	    let localctx = new Field_pairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, StructureParser.RULE_field_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.fieldRef();
	        this.state = 102;
	        this.match(StructureParser.ARROW);
	        this.state = 103;
	        this.fieldRef();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldRef() {
	    let localctx = new FieldRefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, StructureParser.RULE_fieldRef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(StructureParser.ID);
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 106;
	            this.match(StructureParser.DOT);
	            this.state = 107;
	            this.match(StructureParser.ID);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, StructureParser.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(StructureParser.ID);
	        this.state = 114;
	        this.match(StructureParser.COLON);
	        this.state = 115;
	        this.type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, StructureParser.RULE_type);
	    try {
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            this.single_value();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.multi_value();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 119;
	            this.map_type();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	map_type() {
	    let localctx = new Map_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, StructureParser.RULE_map_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(StructureParser.LC);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 123;
	            this.field();
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===22) {
	                this.state = 124;
	                this.match(StructureParser.COMMA);
	                this.state = 125;
	                this.field();
	                this.state = 130;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 133;
	        this.match(StructureParser.RC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multi_value() {
	    let localctx = new Multi_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, StructureParser.RULE_multi_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(StructureParser.LS);
	        this.state = 136;
	        this.type();
	        this.state = 137;
	        this.match(StructureParser.RS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	single_value() {
	    let localctx = new Single_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, StructureParser.RULE_single_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4064) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	l_def() {
	    let localctx = new L_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, StructureParser.RULE_l_def);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.expr();
	        this.state = 142;
	        this.match(StructureParser.EQUALS);
	        this.state = 143;
	        this.match(StructureParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, StructureParser.RULE_expr);
	    try {
	        this.state = 148;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 145;
	            this.funnel();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 146;
	            this.invert();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 147;
	            this.subject();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funnel() {
	    let localctx = new FunnelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, StructureParser.RULE_funnel);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(StructureParser.FUNNEL);
	        this.state = 151;
	        this.match(StructureParser.LP);
	        this.state = 152;
	        this.expr();
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 153;
	            this.match(StructureParser.COMMA);
	            this.state = 154;
	            this.expr();
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 160;
	        this.match(StructureParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	invert() {
	    let localctx = new InvertContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, StructureParser.RULE_invert);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(StructureParser.INVERT);
	        this.state = 163;
	        this.match(StructureParser.LP);
	        this.state = 164;
	        this.expr();
	        this.state = 165;
	        this.match(StructureParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subject() {
	    let localctx = new SubjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, StructureParser.RULE_subject);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(StructureParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

StructureParser.EOF = antlr4.Token.EOF;
StructureParser.V = 1;
StructureParser.M = 2;
StructureParser.R = 3;
StructureParser.F = 4;
StructureParser.STRING = 5;
StructureParser.REFERENCE = 6;
StructureParser.INTEGER = 7;
StructureParser.FLOAT = 8;
StructureParser.BOOLEAN = 9;
StructureParser.DATETIME = 10;
StructureParser.BYTES = 11;
StructureParser.FUNNEL = 12;
StructureParser.INVERT = 13;
StructureParser.ARROW = 14;
StructureParser.EQUALS = 15;
StructureParser.LC = 16;
StructureParser.RC = 17;
StructureParser.LS = 18;
StructureParser.RS = 19;
StructureParser.LP = 20;
StructureParser.RP = 21;
StructureParser.COMMA = 22;
StructureParser.DOT = 23;
StructureParser.COLON = 24;
StructureParser.STAR = 25;
StructureParser.MINUS = 26;
StructureParser.QUANTIFIER = 27;
StructureParser.ID = 28;
StructureParser.WS = 29;

StructureParser.RULE_struct = 0;
StructureParser.RULE_def = 1;
StructureParser.RULE_v_def = 2;
StructureParser.RULE_m_def = 3;
StructureParser.RULE_r_def = 4;
StructureParser.RULE_f_def = 5;
StructureParser.RULE_field_pair_list = 6;
StructureParser.RULE_field_pair = 7;
StructureParser.RULE_fieldRef = 8;
StructureParser.RULE_field = 9;
StructureParser.RULE_type = 10;
StructureParser.RULE_map_type = 11;
StructureParser.RULE_multi_value = 12;
StructureParser.RULE_single_value = 13;
StructureParser.RULE_l_def = 14;
StructureParser.RULE_expr = 15;
StructureParser.RULE_funnel = 16;
StructureParser.RULE_invert = 17;
StructureParser.RULE_subject = 18;

class StructContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_struct;
    }

	EOF() {
	    return this.getToken(StructureParser.EOF, 0);
	};

	def = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefContext);
	    } else {
	        return this.getTypedRuleContext(DefContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterStruct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitStruct(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitStruct(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_def;
    }

	v_def() {
	    return this.getTypedRuleContext(V_defContext,0);
	};

	m_def() {
	    return this.getTypedRuleContext(M_defContext,0);
	};

	r_def() {
	    return this.getTypedRuleContext(R_defContext,0);
	};

	f_def() {
	    return this.getTypedRuleContext(F_defContext,0);
	};

	l_def() {
	    return this.getTypedRuleContext(L_defContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class V_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_v_def;
    }

	V() {
	    return this.getToken(StructureParser.V, 0);
	};

	LP() {
	    return this.getToken(StructureParser.LP, 0);
	};

	ID() {
	    return this.getToken(StructureParser.ID, 0);
	};

	COMMA() {
	    return this.getToken(StructureParser.COMMA, 0);
	};

	map_type() {
	    return this.getTypedRuleContext(Map_typeContext,0);
	};

	RP() {
	    return this.getToken(StructureParser.RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterV_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitV_def(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitV_def(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class M_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_m_def;
    }

	M() {
	    return this.getToken(StructureParser.M, 0);
	};

	LP() {
	    return this.getToken(StructureParser.LP, 0);
	};

	ID() {
	    return this.getToken(StructureParser.ID, 0);
	};

	COMMA() {
	    return this.getToken(StructureParser.COMMA, 0);
	};

	map_type() {
	    return this.getTypedRuleContext(Map_typeContext,0);
	};

	RP() {
	    return this.getToken(StructureParser.RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterM_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitM_def(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitM_def(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class R_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_r_def;
    }

	R() {
	    return this.getToken(StructureParser.R, 0);
	};

	LP() {
	    return this.getToken(StructureParser.LP, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StructureParser.ID);
	    } else {
	        return this.getToken(StructureParser.ID, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StructureParser.COMMA);
	    } else {
	        return this.getToken(StructureParser.COMMA, i);
	    }
	};


	QUANTIFIER() {
	    return this.getToken(StructureParser.QUANTIFIER, 0);
	};

	RP() {
	    return this.getToken(StructureParser.RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterR_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitR_def(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitR_def(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class F_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_f_def;
    }

	F() {
	    return this.getToken(StructureParser.F, 0);
	};

	LP() {
	    return this.getToken(StructureParser.LP, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StructureParser.ID);
	    } else {
	        return this.getToken(StructureParser.ID, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StructureParser.COMMA);
	    } else {
	        return this.getToken(StructureParser.COMMA, i);
	    }
	};


	field_pair_list() {
	    return this.getTypedRuleContext(Field_pair_listContext,0);
	};

	RP() {
	    return this.getToken(StructureParser.RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterF_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitF_def(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitF_def(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Field_pair_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_field_pair_list;
    }

	LC() {
	    return this.getToken(StructureParser.LC, 0);
	};

	RC() {
	    return this.getToken(StructureParser.RC, 0);
	};

	STAR() {
	    return this.getToken(StructureParser.STAR, 0);
	};

	field_pair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Field_pairContext);
	    } else {
	        return this.getTypedRuleContext(Field_pairContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StructureParser.COMMA);
	    } else {
	        return this.getToken(StructureParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterField_pair_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitField_pair_list(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitField_pair_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Field_pairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_field_pair;
    }

	fieldRef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldRefContext);
	    } else {
	        return this.getTypedRuleContext(FieldRefContext,i);
	    }
	};

	ARROW() {
	    return this.getToken(StructureParser.ARROW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterField_pair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitField_pair(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitField_pair(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldRefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_fieldRef;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StructureParser.ID);
	    } else {
	        return this.getToken(StructureParser.ID, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StructureParser.DOT);
	    } else {
	        return this.getToken(StructureParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterFieldRef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitFieldRef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitFieldRef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_field;
    }

	ID() {
	    return this.getToken(StructureParser.ID, 0);
	};

	COLON() {
	    return this.getToken(StructureParser.COLON, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitField(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_type;
    }

	single_value() {
	    return this.getTypedRuleContext(Single_valueContext,0);
	};

	multi_value() {
	    return this.getTypedRuleContext(Multi_valueContext,0);
	};

	map_type() {
	    return this.getTypedRuleContext(Map_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Map_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_map_type;
    }

	LC() {
	    return this.getToken(StructureParser.LC, 0);
	};

	RC() {
	    return this.getToken(StructureParser.RC, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StructureParser.COMMA);
	    } else {
	        return this.getToken(StructureParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterMap_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitMap_type(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitMap_type(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Multi_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_multi_value;
    }

	LS() {
	    return this.getToken(StructureParser.LS, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	RS() {
	    return this.getToken(StructureParser.RS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterMulti_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitMulti_value(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitMulti_value(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Single_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_single_value;
    }

	STRING() {
	    return this.getToken(StructureParser.STRING, 0);
	};

	REFERENCE() {
	    return this.getToken(StructureParser.REFERENCE, 0);
	};

	INTEGER() {
	    return this.getToken(StructureParser.INTEGER, 0);
	};

	FLOAT() {
	    return this.getToken(StructureParser.FLOAT, 0);
	};

	BOOLEAN() {
	    return this.getToken(StructureParser.BOOLEAN, 0);
	};

	DATETIME() {
	    return this.getToken(StructureParser.DATETIME, 0);
	};

	BYTES() {
	    return this.getToken(StructureParser.BYTES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterSingle_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitSingle_value(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitSingle_value(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class L_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_l_def;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EQUALS() {
	    return this.getToken(StructureParser.EQUALS, 0);
	};

	ID() {
	    return this.getToken(StructureParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterL_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitL_def(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitL_def(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_expr;
    }

	funnel() {
	    return this.getTypedRuleContext(FunnelContext,0);
	};

	invert() {
	    return this.getTypedRuleContext(InvertContext,0);
	};

	subject() {
	    return this.getTypedRuleContext(SubjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunnelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_funnel;
    }

	FUNNEL() {
	    return this.getToken(StructureParser.FUNNEL, 0);
	};

	LP() {
	    return this.getToken(StructureParser.LP, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RP() {
	    return this.getToken(StructureParser.RP, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StructureParser.COMMA);
	    } else {
	        return this.getToken(StructureParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterFunnel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitFunnel(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitFunnel(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InvertContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_invert;
    }

	INVERT() {
	    return this.getToken(StructureParser.INVERT, 0);
	};

	LP() {
	    return this.getToken(StructureParser.LP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RP() {
	    return this.getToken(StructureParser.RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterInvert(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitInvert(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitInvert(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StructureParser.RULE_subject;
    }

	ID() {
	    return this.getToken(StructureParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.enterSubject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StructureListener ) {
	        listener.exitSubject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof StructureVisitor ) {
	        return visitor.visitSubject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




StructureParser.StructContext = StructContext; 
StructureParser.DefContext = DefContext; 
StructureParser.V_defContext = V_defContext; 
StructureParser.M_defContext = M_defContext; 
StructureParser.R_defContext = R_defContext; 
StructureParser.F_defContext = F_defContext; 
StructureParser.Field_pair_listContext = Field_pair_listContext; 
StructureParser.Field_pairContext = Field_pairContext; 
StructureParser.FieldRefContext = FieldRefContext; 
StructureParser.FieldContext = FieldContext; 
StructureParser.TypeContext = TypeContext; 
StructureParser.Map_typeContext = Map_typeContext; 
StructureParser.Multi_valueContext = Multi_valueContext; 
StructureParser.Single_valueContext = Single_valueContext; 
StructureParser.L_defContext = L_defContext; 
StructureParser.ExprContext = ExprContext; 
StructureParser.FunnelContext = FunnelContext; 
StructureParser.InvertContext = InvertContext; 
StructureParser.SubjectContext = SubjectContext; 
