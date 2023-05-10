grammar Structure;
struct: def* EOF;
def: v_def | m_def | r_def | f_def | l_def;

v_def: V LP ID COMMA map_type RP;
m_def: M LP ID COMMA map_type RP;
r_def: R LP ID COMMA ID COMMA QUANTIFIER COMMA ID RP;
f_def: F LP ID COMMA ID COMMA field_pair_list RP;

V: 'V' | 'v';
M: 'M' | 'm';
R: 'R' | 'r';
F: 'F' | 'f';

field_pair_list: LC (STAR | (field_pair (COMMA field_pair)*))? RC;
field_pair: fieldRef ARROW fieldRef;
fieldRef: ID (DOT ID)*;

field: ID COLON type;
type: single_value
    | multi_value
    | map_type;
map_type: LC (field (COMMA field)*)? RC;
multi_value: LS type RS;
single_value: STRING
    | REFERENCE
    | INTEGER
    | FLOAT
    | BOOLEAN
    | DATETIME
    | BYTES;

STRING: 'string';
REFERENCE: 'reference';
INTEGER: 'integer';
FLOAT: 'float';
BOOLEAN: 'boolean';
DATETIME: 'datetime';
BYTES: 'bytes';

l_def: expr EQUALS ID;
expr: funnel | invert | subject;
funnel: FUNNEL LP expr (COMMA expr)* RP;
invert: INVERT LP expr RP;
subject: ID;

FUNNEL: 'funnel';
INVERT: 'invert';
ARROW: '->';
EQUALS: '=';
LC: '{';
RC: '}';
LS: '[';
RS: ']';
LP: '(';
RP: ')';
COMMA: ',';
DOT: '.';
COLON: ':';
STAR: '*';
MINUS: '-';
QUANTIFIER: ('one' | 'many'); 
ID: ([a-zA-Z] | '_')+;
WS: ('\r' | '\t' | '\n' | ' ')+ -> skip;