var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-1-1-Propositions",
  "level": "1",
  "url": "sec-1-1-Propositions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Propositions",
  "body": " Propositions  Mathematics and logic deal with statements that are either true or false.    A mathematical statement or proposition is a statement that can be proven to be true or false.    We start with some examples.    Consider the following statements:    .    An integer is divisible by two if and only if its last digit is or .     .     .     .   These are mathematical statements as each of them is either true or false. The first and the second statements above are true and the last two are false.      We give now some examples which are not propositions.   Lebron James is a better basketball player than Michael Jordan.    Messi is better than CR7.    Taylor Swift is the greatest singer of all times.   All the sentences above are opinions and cannot be proven using logic to be true or false.  Consider the following statements.   Lebron James has scored more points in his NBA regular career than Michael Jordan.    As of 2026, Michael Jordan has won more NBA titles than Lebron James.    As of 2026, CR7 has scored more goals than Messi.    Messi has won more World Cups than CR7.     The first statement above is true as Lebron James has scored points in his NBA regular seasons career while Michael Jordan has scored points.  The second statement is also true as Michael Jordan has won six NBA titles while Lebron James has won four such titles.  For the third statement, at the time of writing this book, CR7 has scored goals while Messi has scored goals. Hence, the third statement is also true.  The fourth statement is also true because Messi has won one World Cup in 2022 while CR7 has won none.    Statements are usually represented by letters, for example, , etc and the truth value true is represented by and false is represented by . Similar to common language where we can form complex sentences, in the logical statement, we can also form a compound statement by logical operators.   We use truth tables to describe the relationships between the truth values of propositions. The simplest truth tables are below.         T    F     and           T  T    T  F    F  T    F  F       The negation of a proposition , denoted by or not , is true when is false, and is false when is true.      The negation of the proposition ``4 is an even number'' is ``4 is not an even number'' or ''it is not the case that 4 is an even number''.  The negation of the proposition ``this car is blue'' is be the proposition ``this car is not blue''.    The following truth table summarizes the truth values for the negation.           T  F    F  T       Let and be two propositions. The proposition and , also denoted by , is true precisely when both and are true.      The proposition ``Delaware is the second smallest state in the United States and Dover is its capital'' is true as each of the statements ``Delaware is the second smallest state in the United States'' and ``Dover is its capital'' is true.  The proposition `` and '' is false because the proposition `` '' is false .    The truth table below summarizes the truth values for with all possible truth values of and .             T  T  T    T  F  F    F  T  F    F  F  F     In conclusion, the statement is true if both and are true and false if at least one of the statements or is false.    Let be the statement \\em Alice has 2 erasers and be the statement \\em Alice has 4 pencils. The compound statement is \\em Alice has 2 erasers and 4 pencils.         Disjunction (OR)  When two statements are related by a disjunction, we denote it by and read as `` or ''. In this context, the ''or'' statement can sound a bit different from the ''or'' that we use in the daily life. If you are asked to choose a slice of cake or a scoop of ice cream, usually it means you can only pick one of them, but not both. However, in disjunction, choosing both is still considered true.    Let be the statement ``Alice gets 2 erasers' and be the statement ``Alice gets 4 pencils'', the compound statement formed by disjunction will be ``Alice gets 2 erasers or 4 pencils.'' If the reality is Alice gets either 2 erasers or 4 pencils, then the compound statement is true. The statement is only false if Alice doesn't get 2 erasers and 4 pencils.    The following truth table summarizes the truth values for the disjunction with all possible truth values of and .             T  T  T    T  F  T    F  T  T    F  F  F     In conclusion, a disjunction statement is true if is true or is true or both and are true. It is false when both and are false. Furthermore, the type of ''or'' that we used in daily life is called an ''exclusive or'' in logic, where the statement is true only when one of them is true but not both.    The compound statement `` or '' is true while the statement `` is an odd number or is divisible by 3'' is a false statement.       Implication\/conditional proposition  Can be read as: implies , if then , is necessary for , and is sufficient for . We can also say: is the hypothesis and is the conclusion.  Let : ''The husband gets bonus'' and : ''He buys a gift for his wife''. Then the implication is read as ''if the husband gets bonus, then he buys a gift for his wife''. Imagine if a person promises to get his wife a gift when he gets bonus, this promise is only broken if he gets bonus but not buying any gift. Otherwise, it is OK.  The following truth table summarizes the truth values for the implication with all possible truth values of and .             T  T  T    T  F  F    F  T  T    F  F  T      Converse Given an implication , we can consider its converse which is .  The following table compares the truth values of an implication and its converse.               T  T  T  T    T  F  F  T    F  T  T  F    F  F  T  T     An implication and its converse do not share the exact same truth value. This is a very important thing to note that whenever an implication is true, it does not directly imply that its converse is true. In the context of Mathematics, sometimes when a result is proven as an implication, mathematician will determine whether its converse is also true.    Let be a real number. Consider the statement: If then . This is a true statement since the square of a positive real number is a real number. However, its converse, which is if then is not true. Take for example, then the value of but .    In the situation where an implication and its converse are true, usually the result is presented as a double implication, which will be elaborated later in this section.  Besides the converse, we also consider the contrapositive of an implication.   Contrapositive If the implication is given by then its contrapositive is given by the implication .  The following table compares the truth values of an implication and its contrapositive.                   T  T  F  F  T  T    T  F  F  T  F  F    F  T  T  F  T  T    F  F  T  T  T  T     Since these two compound statements share the same truth value, we can say that they are equivalent. This fact will be useful in the next chapter when we are writing proof. Example: If I get a C- then I pass this course. This is equivalent as saying, ``if I do not pass this course, then I do not get a C-''.     Double implication  ( if and only if ) It means AND                         T  T  T  T  T    T  F  F  T  F    F  T  T  F  F    F  F  T  T  T      Conclusion: The double implication is true if both and have the same truth value and it is false if and have different truth values.   Example:    ``An integer is an even number if and only if is evenly divisible by 2,'' is a true statement.    ``A two digits number is even if and only if it ends with ,'' is a false statement.        "
},
{
  "id": "sec-1-1-Propositions-3",
  "level": "2",
  "url": "sec-1-1-Propositions.html#sec-1-1-Propositions-3",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A mathematical statement or proposition is a statement that can be proven to be true or false.   "
},
{
  "id": "exa-logic1",
  "level": "2",
  "url": "sec-1-1-Propositions.html#exa-logic1",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  Consider the following statements:    .    An integer is divisible by two if and only if its last digit is or .     .     .     .   These are mathematical statements as each of them is either true or false. The first and the second statements above are true and the last two are false.   "
},
{
  "id": "sec-1-1-Propositions-6",
  "level": "2",
  "url": "sec-1-1-Propositions.html#sec-1-1-Propositions-6",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  We give now some examples which are not propositions.   Lebron James is a better basketball player than Michael Jordan.    Messi is better than CR7.    Taylor Swift is the greatest singer of all times.   All the sentences above are opinions and cannot be proven using logic to be true or false.  Consider the following statements.   Lebron James has scored more points in his NBA regular career than Michael Jordan.    As of 2026, Michael Jordan has won more NBA titles than Lebron James.    As of 2026, CR7 has scored more goals than Messi.    Messi has won more World Cups than CR7.     The first statement above is true as Lebron James has scored points in his NBA regular seasons career while Michael Jordan has scored points.  The second statement is also true as Michael Jordan has won six NBA titles while Lebron James has won four such titles.  For the third statement, at the time of writing this book, CR7 has scored goals while Messi has scored goals. Hence, the third statement is also true.  The fourth statement is also true because Messi has won one World Cup in 2022 while CR7 has won none.   "
},
{
  "id": "def-negation",
  "level": "2",
  "url": "sec-1-1-Propositions.html#def-negation",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  The negation of a proposition , denoted by or not , is true when is false, and is false when is true.   "
},
{
  "id": "sec-1-1-Propositions-13",
  "level": "2",
  "url": "sec-1-1-Propositions.html#sec-1-1-Propositions-13",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "  The negation of the proposition ``4 is an even number'' is ``4 is not an even number'' or ''it is not the case that 4 is an even number''.  The negation of the proposition ``this car is blue'' is be the proposition ``this car is not blue''.   "
},
{
  "id": "sec-1-1-Propositions-16",
  "level": "2",
  "url": "sec-1-1-Propositions.html#sec-1-1-Propositions-16",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "  Let and be two propositions. The proposition and , also denoted by , is true precisely when both and are true.   "
},
{
  "id": "sec-1-1-Propositions-17",
  "level": "2",
  "url": "sec-1-1-Propositions.html#sec-1-1-Propositions-17",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": "  The proposition ``Delaware is the second smallest state in the United States and Dover is its capital'' is true as each of the statements ``Delaware is the second smallest state in the United States'' and ``Dover is its capital'' is true.  The proposition `` and '' is false because the proposition `` '' is false .   "
},
{
  "id": "sec-1-1-Propositions-21",
  "level": "2",
  "url": "sec-1-1-Propositions.html#sec-1-1-Propositions-21",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  Let be the statement \\em Alice has 2 erasers and be the statement \\em Alice has 4 pencils. The compound statement is \\em Alice has 2 erasers and 4 pencils.    "
},
{
  "id": "sec-1-1-Propositions-22-1-1-2",
  "level": "2",
  "url": "sec-1-1-Propositions.html#sec-1-1-Propositions-22-1-1-2",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  Let be the statement ``Alice gets 2 erasers' and be the statement ``Alice gets 4 pencils'', the compound statement formed by disjunction will be ``Alice gets 2 erasers or 4 pencils.'' If the reality is Alice gets either 2 erasers or 4 pencils, then the compound statement is true. The statement is only false if Alice doesn't get 2 erasers and 4 pencils.   "
},
{
  "id": "sec-1-1-Propositions-22-1-1-6",
  "level": "2",
  "url": "sec-1-1-Propositions.html#sec-1-1-Propositions-22-1-1-6",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  The compound statement `` or '' is true while the statement `` is an odd number or is divisible by 3'' is a false statement.   "
},
{
  "id": "sec-1-1-Propositions-22-1-2-9",
  "level": "2",
  "url": "sec-1-1-Propositions.html#sec-1-1-Propositions-22-1-2-9",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Let be a real number. Consider the statement: If then . This is a true statement since the square of a positive real number is a real number. However, its converse, which is if then is not true. Take for example, then the value of but .   "
},
{
  "id": "sec-1-2-CompoundStatements",
  "level": "1",
  "url": "sec-1-2-CompoundStatements.html",
  "type": "Section",
  "number": "1.2",
  "title": "Compound Statements",
  "body": " Compound Statements  Text of section.  "
},
{
  "id": "sec-2-1-Quantifiers",
  "level": "1",
  "url": "sec-2-1-Quantifiers.html",
  "type": "Section",
  "number": "2.1",
  "title": "Quantifiers",
  "body": " Quantifiers  Text of section.  "
},
{
  "id": "sec-2-2-ProofMethods",
  "level": "1",
  "url": "sec-2-2-ProofMethods.html",
  "type": "Section",
  "number": "2.2",
  "title": "Proof Methods",
  "body": " Proof Methods  Text of section.  "
},
{
  "id": "sec-2-3-ElementaryProof",
  "level": "1",
  "url": "sec-2-3-ElementaryProof.html",
  "type": "Section",
  "number": "2.3",
  "title": "Elementary Proof Techniques",
  "body": " Elementary Proof Techniques  Text of section.  "
},
{
  "id": "sec-2-4-ProvingQuantifiedStat",
  "level": "1",
  "url": "sec-2-4-ProvingQuantifiedStat.html",
  "type": "Section",
  "number": "2.4",
  "title": "Proving Quantified Statements",
  "body": " Proving Quantified Statements  Text of section.  "
},
{
  "id": "sec-3-1-SetsTerminology",
  "level": "1",
  "url": "sec-3-1-SetsTerminology.html",
  "type": "Section",
  "number": "3.1",
  "title": "Sets and Related Terminology",
  "body": " Sets and Related Terminology  Text of section.  "
},
{
  "id": "sec-3-2-Subsets-PowerSets",
  "level": "1",
  "url": "sec-3-2-Subsets-PowerSets.html",
  "type": "Section",
  "number": "3.2",
  "title": "Subsets and the Powerset",
  "body": " Subsets and the Powerset  Text of section.  "
},
{
  "id": "sec-3-3-CartesianProduct",
  "level": "1",
  "url": "sec-3-3-CartesianProduct.html",
  "type": "Section",
  "number": "3.3",
  "title": "The Cartesian Product",
  "body": " The Cartesian Product  Text of section.  "
},
{
  "id": "sec-3-4-SetOperations",
  "level": "1",
  "url": "sec-3-4-SetOperations.html",
  "type": "Section",
  "number": "3.4",
  "title": "Set Operations",
  "body": " Set Operations  Text of section.  "
},
{
  "id": "sec-4-1-BinaryRelations",
  "level": "1",
  "url": "sec-4-1-BinaryRelations.html",
  "type": "Section",
  "number": "4.1",
  "title": "Binary Relations",
  "body": " Binary Relations  Text of section.  "
},
{
  "id": "sec-4-2-PropertiesOfRelations",
  "level": "1",
  "url": "sec-4-2-PropertiesOfRelations.html",
  "type": "Section",
  "number": "4.2",
  "title": "Properties of Relations",
  "body": " Properties of Relations  Text of section.  "
},
{
  "id": "sec-4-3-EquivRelations",
  "level": "1",
  "url": "sec-4-3-EquivRelations.html",
  "type": "Section",
  "number": "4.3",
  "title": "Equivalence Relations",
  "body": " Equivalence Relations  Text of section.  "
},
{
  "id": "sec-5-1-BasicNotions",
  "level": "1",
  "url": "sec-5-1-BasicNotions.html",
  "type": "Section",
  "number": "5.1",
  "title": "Basic Notions",
  "body": " Basic Notions  The notion of function is one of the fundamental concepts of mathematics. Functions appear in calculus classes in the form of relations between two variables and such as    (linear functions),     (quadratic functions),     (trigonometric functions),     (exponential functions) and (logarithm functions),   and so on.    Let and be two non-empty sets. A function from to is a correspondence that associates to each element a unique element of . The set is called the domain of and the set is called the codomain of .    To avoid unnecessary repetition, when dealing with a function , the underlying assumption will be that and are non-empty sets.    In calculus, the domain and the codomain of functions were often not explicitly stated and were understood to be both the set of real number .    It is worth emphasizing that a function consists of three things:   the domain ,    the codomain ,    the rule\/formula that associates to each element a unique element .       Let and be two functions. We say that the functions and are equal or the same if    ,     ,    for any .         Define , where and , where   The functions and are equal because   their domains are the same ,    their codomains are identical , and     for any .         Define the following functions   Any two of these functions are different:    because the codomains are different (the codomain of is which is different from , the codomain of ).     because the domains are different (the domain of is which is not the same as , the domain of ).     because either the domains are different or the codomains are not the same.         Consider the following functions: The functions , and are not the same because    and have different codomains,     and have different domains,     and have different domains (and codomains).         Let be a function from to . The graph of the function is the set of ordered pairs     "
},
{
  "id": "def-func",
  "level": "2",
  "url": "sec-5-1-BasicNotions.html#def-func",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  Let and be two non-empty sets. A function from to is a correspondence that associates to each element a unique element of . The set is called the domain of and the set is called the codomain of .   "
},
{
  "id": "sec-5-1-BasicNotions-5",
  "level": "2",
  "url": "sec-5-1-BasicNotions.html#sec-5-1-BasicNotions-5",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "  In calculus, the domain and the codomain of functions were often not explicitly stated and were understood to be both the set of real number .   "
},
{
  "id": "sec-5-1-BasicNotions-7",
  "level": "2",
  "url": "sec-5-1-BasicNotions.html#sec-5-1-BasicNotions-7",
  "type": "Definition",
  "number": "5.1.3",
  "title": "",
  "body": "  Let and be two functions. We say that the functions and are equal or the same if    ,     ,    for any .      "
},
{
  "id": "exa-function1to5_2n",
  "level": "2",
  "url": "sec-5-1-BasicNotions.html#exa-function1to5_2n",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": "  Define , where and , where   The functions and are equal because   their domains are the same ,    their codomains are identical , and     for any .      "
},
{
  "id": "sec-5-1-BasicNotions-9",
  "level": "2",
  "url": "sec-5-1-BasicNotions.html#sec-5-1-BasicNotions-9",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": "  Define the following functions   Any two of these functions are different:    because the codomains are different (the codomain of is which is different from , the codomain of ).     because the domains are different (the domain of is which is not the same as , the domain of ).     because either the domains are different or the codomains are not the same.      "
},
{
  "id": "exa-function_x2",
  "level": "2",
  "url": "sec-5-1-BasicNotions.html#exa-function_x2",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": "  Consider the following functions: The functions , and are not the same because    and have different codomains,     and have different domains,     and have different domains (and codomains).      "
},
{
  "id": "def-graph_function",
  "level": "2",
  "url": "sec-5-1-BasicNotions.html#def-graph_function",
  "type": "Definition",
  "number": "5.1.7",
  "title": "",
  "body": "  Let be a function from to . The graph of the function is the set of ordered pairs    "
},
{
  "id": "sec-5-2-Injective",
  "level": "1",
  "url": "sec-5-2-Injective.html",
  "type": "Section",
  "number": "5.2",
  "title": "Injective or One-to-One Functions",
  "body": " Injective or One-to-One Functions  Text of section.  "
},
{
  "id": "sec-5-3-Surjective",
  "level": "1",
  "url": "sec-5-3-Surjective.html",
  "type": "Section",
  "number": "5.3",
  "title": "Surjective or Onto Functions",
  "body": " Surjective or Onto Functions  Text of section.  "
},
{
  "id": "sec-5-4-Composition",
  "level": "1",
  "url": "sec-5-4-Composition.html",
  "type": "Section",
  "number": "5.4",
  "title": "Composition of Functions",
  "body": " Composition of Functions  Text of section.  "
},
{
  "id": "sec-5-5-Bijective",
  "level": "1",
  "url": "sec-5-5-Bijective.html",
  "type": "Section",
  "number": "5.5",
  "title": "Bijective Functions and Cardinalities of Sets",
  "body": " Bijective Functions and Cardinalities of Sets  Text of section.  "
},
{
  "id": "sec-5-6-AlgorithmsComplexity",
  "level": "1",
  "url": "sec-5-6-AlgorithmsComplexity.html",
  "type": "Section",
  "number": "5.6",
  "title": "Algorithms and Complexity",
  "body": " Algorithms and Complexity  Text of section.  "
},
{
  "id": "sec-5-7-Summary",
  "level": "1",
  "url": "sec-5-7-Summary.html",
  "type": "Section",
  "number": "5.7",
  "title": "Injective\/Surjective Summary",
  "body": " Injective\/Surjective Summary  Text of section.  "
},
{
  "id": "sec-6-1-WellOrdering",
  "level": "1",
  "url": "sec-6-1-WellOrdering.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Well-Ordering Principle",
  "body": " The Well-Ordering Principle  Text of section.  "
},
{
  "id": "sec-6-2-StandardInduction",
  "level": "1",
  "url": "sec-6-2-StandardInduction.html",
  "type": "Section",
  "number": "6.2",
  "title": "Standard Induction",
  "body": " Standard Induction  Text of section.  "
},
{
  "id": "sec-6-3-StrongInduction",
  "level": "1",
  "url": "sec-6-3-StrongInduction.html",
  "type": "Section",
  "number": "6.3",
  "title": "Strong Induction",
  "body": " Strong Induction  Text of section.  "
},
{
  "id": "sec-7-1-Divisibility",
  "level": "1",
  "url": "sec-7-1-Divisibility.html",
  "type": "Section",
  "number": "7.1",
  "title": "Divisibility",
  "body": " Divisibility  Text of section.  "
},
{
  "id": "sec-7-2-AppliDivAlg",
  "level": "1",
  "url": "sec-7-2-AppliDivAlg.html",
  "type": "Section",
  "number": "7.2",
  "title": "Applications of the Division Algorithm",
  "body": " Applications of the Division Algorithm  Text of section.  "
},
{
  "id": "sec-7-3-PrimesFTA",
  "level": "1",
  "url": "sec-7-3-PrimesFTA.html",
  "type": "Section",
  "number": "7.3",
  "title": "Primes and the Fundamental Theorem of Arithmetic",
  "body": " Primes and the Fundamental Theorem of Arithmetic  Text of section.  "
},
{
  "id": "sec-7-4-ModularArithmetic",
  "level": "1",
  "url": "sec-7-4-ModularArithmetic.html",
  "type": "Section",
  "number": "7.4",
  "title": "Modular Arithmetic",
  "body": " Modular Arithmetic  Text of section.  "
},
{
  "id": "sec-7-5-ModularExp",
  "level": "1",
  "url": "sec-7-5-ModularExp.html",
  "type": "Section",
  "number": "7.5",
  "title": "Modular Exponentiation",
  "body": " Modular Exponentiation  Text of section.  "
},
{
  "id": "sec-7-6-AppliModArith",
  "level": "1",
  "url": "sec-7-6-AppliModArith.html",
  "type": "Section",
  "number": "7.6",
  "title": "Applications of Modular Arithmetic",
  "body": " Applications of Modular Arithmetic  Text of section.  "
},
{
  "id": "sec-8-1-ArithGeomProg",
  "level": "1",
  "url": "sec-8-1-ArithGeomProg.html",
  "type": "Section",
  "number": "8.1",
  "title": "Arithmetic and Geometric Progression",
  "body": " Arithmetic and Geometric Progression  Text of section.  "
},
{
  "id": "sec-8-2-SubsetPermBinom",
  "level": "1",
  "url": "sec-8-2-SubsetPermBinom.html",
  "type": "Section",
  "number": "8.2",
  "title": "Subsets, Permutations and Binomial Theorem",
  "body": " Subsets, Permutations and Binomial Theorem  Text of section.  "
},
{
  "id": "sec-8-3-PIE",
  "level": "1",
  "url": "sec-8-3-PIE.html",
  "type": "Section",
  "number": "8.3",
  "title": "The Principle of Inclusion and Exclusion",
  "body": " The Principle of Inclusion and Exclusion  Text of section.  "
},
{
  "id": "sec-8-4-RecurrenceRel",
  "level": "1",
  "url": "sec-8-4-RecurrenceRel.html",
  "type": "Section",
  "number": "8.4",
  "title": "Recurrence Relations",
  "body": " Recurrence Relations  Text of section.  "
},
{
  "id": "sec-8-5-Pigeonhole",
  "level": "1",
  "url": "sec-8-5-Pigeonhole.html",
  "type": "Section",
  "number": "8.5",
  "title": "The Pigeonhole Principle",
  "body": " The Pigeonhole Principle  Text of section.  "
},
{
  "id": "sec-9-1-DegreesIsomorphism",
  "level": "1",
  "url": "sec-9-1-DegreesIsomorphism.html",
  "type": "Section",
  "number": "9.1",
  "title": "Degrees, Isomorphism",
  "body": " Degrees, Isomorphism  A graph is an abstract model of a network. We are surrounded by networks: social, communication, biological and their study is of interest in many realms, both theoretical and applied. We start with some examples.   Kevin Bacon network   Kevin Bacon is a famous American actor that has appeared in many movies. The Bacon graph or the collaboration graph of actors is the network whose nodes\/points are movie actors, where two actors are connected by an edge (a segment or curve joining the corresponding points) if they have been in a movie together.   The actors network on Kevin Bacon, Cate Blanchett, Dustin Hoffman, Brad Pitt and Meryl Streep, Emma Watson and Bruce Willis     EW = (0, 2.5)  MS = (2, 4.5)  DH = (2, 0.5)  KB = (4.7, 2.7)  CB = (7, 4.5)  BP = (7, 0.5)  BW = (9.5, 2.2)                      EW  MS  DH  KB  CB  BP  BW          gives a small snapshot of this network. For example, Kevin Bacon and Meryl Streep acted in the movie River Wild , Kevin Bacon, Dustin Hoffman and Brad Pitt were in the movie Sleepers , while Cate Blanchett and Kevin Bacon acted in The Gift . At this time, Brad Pitt and Meryl Streep have not been in the same movie so there is no segment\/curve connecting them in . The same situation applies to Cate Blanchett and Dustin Hoffman. Cate Blanchett and Meryl Streep acted in Don't look up . We invite the reader to verify the remaining links involving these actors.  The whole network is much larger and evolves in time as more movies are being made. This network has also led to the notion of the Bacon number which is defined as follows.   Kevin Bacon is the only person with Bacon number .    Any actor that has appeared in a movie with Kevin Bacon gets Bacon number . All the actors in except Kevin Bacon, have Bacon number .    Any actor that has does not have Bacon number and has appeared in a movie with an actor of Bacon number , gets Bacon number .    For , an actor that does not have Bacon number or less, will get Bacon number , if that actor has appeared in a movie with an actor of Bacon number .   If an actor cannot be connected to Kevin Bacon as above via a chain of common movies, then its Bacon number is . Each of the authors of this book has Bacon number , for example.  While there are many people with Bacon number , it appears that the largest (finite) Bacon number is .     Erdős collaboration network   Paul Erdős (1913-1996) was a famous Hungarian mathematician who wrote research papers and had co-authors These numbers are obtained from AMS MathSciNet . There are slightly different numbers at the Erdős Number Project. . Erdős's work has greatly influenced many areas of mathematics, especially discrete mathematics.  Consider the following collaboration network. The members of this network are mathematicians or authors of mathematical papers. Two mathematicians are joined by an edge in this network if they are co-authors on a mathematical paper or book. Of course, this network evolves with time as more papers and books are being published and more co-authorship relations are being created. To avoid amiguities, we focus on the collaboration network at present time.  INSERT FIGURE: The collaboration network of Erdös, Chung, Einstein, Graham and Straus  In this network, Erdős is joined by an edge to Fan Chung, Ron Graham and Ernst Straus, but is not joined by an edge to Albert Einstein. Ernst Straus who wrote a paper with Einstein and wrote a paper with Ron Graham, but did not write a paper with with Fan Chung. The collaboration network with these five people is in Figure ??  Based on the large collaboration network or graph of mathematicians, the notion of the Erdős number has been introduced The first reference seems to be the paper ???. And what is your Erdős number? by Casper Goffman in The American Mathematical Monthly in 1969. . Each mathematician receives a number which (we will define these terms later) is the shortest length of a path from that mathematician to Erdős in the collaboration graph. For now, we can define these numbers as follows.   Erdős is the only person that has Erdős number .    Every co-author of Erdős gets number . Therefore, Chung, Graham and Straus have Erdős number .    Each person that does not have Erdős number , but has written a paper with someone of Erdős number , gets Erdős number . Einstein has Erdős number via Straus.    Each person that does not have Erdős number , but has written a paper with someone of Erdős number , receives Erdős number .    The procedure continues in the same manner similar to the assignment of Bacon numbers earlier. For , a person that does not have Erdős number or less, gets Erdős number if that person has written a paper with someone with Erdős number .   Currently, the largest Erdős number is . Every person that does not have a (finite) Erdős number, gets Erdős number . The authors of this book have the following Erdős numbers:   Novi Bong has Erdős number via Ortrud Oellermann.    Sebastian Cioabă has Erdős number via Noga Alon or Peter Cameron or Brendan McKay or Ram Murty.    Robert Coulter has Erdős number via Aart Blokhuis and Peter Cameron.        An abstract social network\/graph   We want to describe the friendship relations between a finite set of people.  INSERT FIGURE: Another graph\/network example  Assume that we have five people which we represent in Figure ?? as dots or points in the plane: In Figure ??, we draw a segment joining two points if the two persons represented by these points are friends. We can represent these segments as -subsets of the :      "
},
{
  "id": "sec-9-1-DegreesIsomorphism-3",
  "level": "2",
  "url": "sec-9-1-DegreesIsomorphism.html#sec-9-1-DegreesIsomorphism-3",
  "type": "Example",
  "number": "9.1.1",
  "title": "Kevin Bacon network.",
  "body": " Kevin Bacon network   Kevin Bacon is a famous American actor that has appeared in many movies. The Bacon graph or the collaboration graph of actors is the network whose nodes\/points are movie actors, where two actors are connected by an edge (a segment or curve joining the corresponding points) if they have been in a movie together.   The actors network on Kevin Bacon, Cate Blanchett, Dustin Hoffman, Brad Pitt and Meryl Streep, Emma Watson and Bruce Willis     EW = (0, 2.5)  MS = (2, 4.5)  DH = (2, 0.5)  KB = (4.7, 2.7)  CB = (7, 4.5)  BP = (7, 0.5)  BW = (9.5, 2.2)                      EW  MS  DH  KB  CB  BP  BW          gives a small snapshot of this network. For example, Kevin Bacon and Meryl Streep acted in the movie River Wild , Kevin Bacon, Dustin Hoffman and Brad Pitt were in the movie Sleepers , while Cate Blanchett and Kevin Bacon acted in The Gift . At this time, Brad Pitt and Meryl Streep have not been in the same movie so there is no segment\/curve connecting them in . The same situation applies to Cate Blanchett and Dustin Hoffman. Cate Blanchett and Meryl Streep acted in Don't look up . We invite the reader to verify the remaining links involving these actors.  The whole network is much larger and evolves in time as more movies are being made. This network has also led to the notion of the Bacon number which is defined as follows.   Kevin Bacon is the only person with Bacon number .    Any actor that has appeared in a movie with Kevin Bacon gets Bacon number . All the actors in except Kevin Bacon, have Bacon number .    Any actor that has does not have Bacon number and has appeared in a movie with an actor of Bacon number , gets Bacon number .    For , an actor that does not have Bacon number or less, will get Bacon number , if that actor has appeared in a movie with an actor of Bacon number .   If an actor cannot be connected to Kevin Bacon as above via a chain of common movies, then its Bacon number is . Each of the authors of this book has Bacon number , for example.  While there are many people with Bacon number , it appears that the largest (finite) Bacon number is .   "
},
{
  "id": "sec-9-1-DegreesIsomorphism-4",
  "level": "2",
  "url": "sec-9-1-DegreesIsomorphism.html#sec-9-1-DegreesIsomorphism-4",
  "type": "Example",
  "number": "9.1.3",
  "title": "Erdős collaboration network.",
  "body": " Erdős collaboration network   Paul Erdős (1913-1996) was a famous Hungarian mathematician who wrote research papers and had co-authors These numbers are obtained from AMS MathSciNet . There are slightly different numbers at the Erdős Number Project. . Erdős's work has greatly influenced many areas of mathematics, especially discrete mathematics.  Consider the following collaboration network. The members of this network are mathematicians or authors of mathematical papers. Two mathematicians are joined by an edge in this network if they are co-authors on a mathematical paper or book. Of course, this network evolves with time as more papers and books are being published and more co-authorship relations are being created. To avoid amiguities, we focus on the collaboration network at present time.  INSERT FIGURE: The collaboration network of Erdös, Chung, Einstein, Graham and Straus  In this network, Erdős is joined by an edge to Fan Chung, Ron Graham and Ernst Straus, but is not joined by an edge to Albert Einstein. Ernst Straus who wrote a paper with Einstein and wrote a paper with Ron Graham, but did not write a paper with with Fan Chung. The collaboration network with these five people is in Figure ??  Based on the large collaboration network or graph of mathematicians, the notion of the Erdős number has been introduced The first reference seems to be the paper ???. And what is your Erdős number? by Casper Goffman in The American Mathematical Monthly in 1969. . Each mathematician receives a number which (we will define these terms later) is the shortest length of a path from that mathematician to Erdős in the collaboration graph. For now, we can define these numbers as follows.   Erdős is the only person that has Erdős number .    Every co-author of Erdős gets number . Therefore, Chung, Graham and Straus have Erdős number .    Each person that does not have Erdős number , but has written a paper with someone of Erdős number , gets Erdős number . Einstein has Erdős number via Straus.    Each person that does not have Erdős number , but has written a paper with someone of Erdős number , receives Erdős number .    The procedure continues in the same manner similar to the assignment of Bacon numbers earlier. For , a person that does not have Erdős number or less, gets Erdős number if that person has written a paper with someone with Erdős number .   Currently, the largest Erdős number is . Every person that does not have a (finite) Erdős number, gets Erdős number . The authors of this book have the following Erdős numbers:   Novi Bong has Erdős number via Ortrud Oellermann.    Sebastian Cioabă has Erdős number via Noga Alon or Peter Cameron or Brendan McKay or Ram Murty.    Robert Coulter has Erdős number via Aart Blokhuis and Peter Cameron.      "
},
{
  "id": "sec-9-1-DegreesIsomorphism-5",
  "level": "2",
  "url": "sec-9-1-DegreesIsomorphism.html#sec-9-1-DegreesIsomorphism-5",
  "type": "Example",
  "number": "9.1.4",
  "title": "An abstract social network\/graph.",
  "body": " An abstract social network\/graph   We want to describe the friendship relations between a finite set of people.  INSERT FIGURE: Another graph\/network example  Assume that we have five people which we represent in Figure ?? as dots or points in the plane: In Figure ??, we draw a segment joining two points if the two persons represented by these points are friends. We can represent these segments as -subsets of the :    "
},
{
  "id": "sec-9-2-WalksPathDiam",
  "level": "1",
  "url": "sec-9-2-WalksPathDiam.html",
  "type": "Section",
  "number": "9.2",
  "title": "Walks, Paths and Diameter",
  "body": " Walks, Paths and Diameter  Text of section.  "
},
{
  "id": "sec-9-3-Bipartite",
  "level": "1",
  "url": "sec-9-3-Bipartite.html",
  "type": "Section",
  "number": "9.3",
  "title": "Bipartite Graphs",
  "body": " Bipartite Graphs  Text of section.  "
},
{
  "id": "sec-9-4-Trees",
  "level": "1",
  "url": "sec-9-4-Trees.html",
  "type": "Section",
  "number": "9.4",
  "title": "Trees",
  "body": " Trees  Text of section.  "
},
{
  "id": "sec-9-5-GraphColor",
  "level": "1",
  "url": "sec-9-5-GraphColor.html",
  "type": "Section",
  "number": "9.5",
  "title": "Graph Coloring",
  "body": " Graph Coloring  Text of section.  "
},
{
  "id": "sec-9-6-Ramsey",
  "level": "1",
  "url": "sec-9-6-Ramsey.html",
  "type": "Section",
  "number": "9.6",
  "title": "Ramsey Theory",
  "body": " Ramsey Theory  Text of section.  "
},
{
  "id": "sec-9-7-Planar",
  "level": "1",
  "url": "sec-9-7-Planar.html",
  "type": "Section",
  "number": "9.7",
  "title": "Planar Graphs",
  "body": " Planar Graphs  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
