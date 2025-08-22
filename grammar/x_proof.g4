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

Identifier
    : (LeadingChars | Nondigit) (Digit | Nondigit)*
    ;

Parameters
    : Identifier (',' Identifier)*
    ;

UseRule
    : Identifier '(' UseRules? ')'
    ;

UseRules
    : UseRule (',' UseRule)*
    ;

RuleBody
    : UseRule
    | PatternMatching
    | Alias
    ;

Rule
    : RuleBody ';'
    ;

Definition
    : Identifier ('(' Parameters? ')' ('conform' '{' Rule* '}')? )?
    ;

DefinitionClause
    : 'define' Definition (',' Definition)* ';'
    ;

Axiom
    : Identifier '(' Parameters? ')' ('premise' '{' Rule* '}')? 'conclusion' '{' Rule* '}'
    ;

AxiomClause
    : 'axiom' Axiom (',' Axiom)* ';'
    ;

Theorem
    : Identifier '(' Parameters? ')' ('premise' '{' Rule* '}')? 'conclusion' '{' Rule* '}' 'proof' '{' Rule* '}'
    ;

TheoremClause
    : 'theorem' Theorem (',' Theorem)* ';'
    ;

BlockComment
    : '/*' .*? '*/' -> channel(HIDDEN)
    ;

LineComment
    : '//' ~[\r\n]* -> channel(HIDDEN)
    ;

Clause
    : DefinitionClause
    | AxiomClause
    | TheoremClause
    ;

x_proof
    : Clause+
    ;
