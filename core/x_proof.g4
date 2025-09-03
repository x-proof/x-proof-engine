grammar x_proof;

fragment Nondigit
    : [a-zA-Z_]
    ;

fragment Digit
    : [0-9]
    ;

fragment LeadingChars
    : [@#$]
    ;

IDENTIFIER
    : (LeadingChars | Nondigit) (Digit | Nondigit)*
    ;

parameters
    : IDENTIFIER (',' IDENTIFIER)*
    ;

object
    : IDENTIFIER ('(' objects? ')')?
    ;

objects
    : object (',' object)*
    ;

aliasBody
    : IDENTIFIER '=' object
    ;

alias
    : 'alias' aliasBody (',' aliasBody)* ';'
    ;

standalonePatternMatchingBody
    : object '=' object
    ;

standalonePatternMatching
    : 'match' standalonePatternMatchingBody (',' standalonePatternMatching)* ';'
    ;

multiplePatternMatchingBody
    : (object | 'default') '=>' '{' rule* '}' ';'
    ;

multiplePatternMatching
    : 'match' '(' object ')' '{' multiplePatternMatchingBody* '}' ';'
    ;

patternMatching
    : standalonePatternMatching
    | multiplePatternMatching
    ;

rule
    : object ';'
    | patternMatching
    | alias
    ;

definition
    : IDENTIFIER ('(' parameters? ')' ('conform' '{' rule* '}')? )?
    ;

definitionClause
    : 'define' definition (',' definition)* ';'
    ;

axiom
    : object
    | IDENTIFIER '(' parameters? ')' ('premise' '{' rule* '}')? ('conclusion' '{' rule* '}')
    ;

axiomClause
    : 'axiom' axiom (',' axiom)* ';'
    ;

theorem
    : IDENTIFIER '(' parameters? ')' ('premise' '{' rule* '}')? 'conclusion' '{' rule* '}' 'proof' '{' rule* '}'
    ;

theoremClause
    : 'theorem' theorem (',' theorem)* ';'
    ;

Whitespace
    : [ \t]+ -> channel(HIDDEN)
    ;

Newline
    : ('\r' '\n'? | '\n') -> channel(HIDDEN)
    ;

BlockComment
    : '/*' .*? '*/' -> channel(HIDDEN)
    ;

LineComment
    : '//' ~[\r\n]* -> channel(HIDDEN)
    ;

clause
    : definitionClause
    | axiomClause
    | theoremClause
    ;

x_proof
    : clause+
    ;
