# C2W1: Autocorrect and Minimum Edit Distance

## Video: Intro to Course 2 (1 min)

## Video: Week Introduction (55 sec)

----

## Video: Overview (1 min)

- What is autocorrect
- Build autocorrect model
- Minimum edit duistance
- Minimum edit duistance algorithm
- Dynamic programming


## Reading: Overview (3 minutes)

You use auto-correct everyday. When you send your friend a text message, or when you make a mistake in a query, there is an autocorrect behind the scenes that corrects the sentence for you. This week you are also going to learn about minimum edit distance, which tells you the minimum amount of edits to change one word into another. In doing that, you will learn about dynamic programming which is an important programming concept which frequently comes up in interviews and could be used to solve a lot of optimization problems.  


## Video: Autocorrect (2 min)

1. Identify a mispelled
2. Find strings n edit distance away
3. Filter candidates
4. Calculate word probabilities

## Reading: Autocorrect (4 minutes)

To implement autocorrect in this week's assignment, you have to follow these steps: 

- Identify a misspelled word
- Find strings n edit distance away: (these could be random strings)
- Filter candidates: (keep only the real words from the previous steps)
- Calculate word probabilities: (choose the word that is most likely to occur in that context)


----

## Video: Building the model (4 min)

1. Identify a mispelled
   Look up in dictionary
   
2. Edit distance
   - number of operations to change one str to another
   - Edit operationsa: Insert, Delete, Switch, Replace
   
3. Filter Candidates
   - Remove words not in the dictionary

## Reading: Building the model (3 minutes)

## Lab: Building the vocabulary (1h)

## Video: Building the model II (3 min)

4. Calculate word probabilities
   - freq(word) / total number of words

## Reading: Building the model II (4 minutes)

## Lab: Candidates from edits (1h)

----

## Video: Minimum edit distance (3 min)

- Spelling correction, document similarity
- How to evaluate similarity between 2 strings
- 
- Minimum Edit Distance:
  - Edits: Insert, Delete, Replace
  - MED = Minimum number of edits to transform a string
  
- Finding Minimum edit distance:
  - Grows exponentially lemgth of string
  - Important for long strings, DNA sequences, etc...

  
## Reading: Minimum Edit Distance (5 minutes)

Minimum edit distance allows you to:  
  - Evaluate similarity between two strings__
  - Find the minimum number of edits between two strings__
  - Implement spelling correction, document similarity,__ 
  - Implement machine translation,, DNA sequencing, and more  

Remember that the edits include:__
  - Insert 	(add a letter)				‘to’:  ‘top’, ‘two’ …__
  - Delete	(remove a letter)			‘hat’: ‘ha’, ‘at’, ‘ht’__
  - Replace	(change letter to another)	‘jaw’: ‘jar’, ‘paw’, …__
  
Note that as your strings get larger it gets much harder to calculate the minimum edit distance. Hence you will now learn about the minimum edit distance algorithm!__ 

## Video: Minimum edit distance algorithm (5 min)

Dynamic Programming
Source word: play
Target word: stay

Use a matrix D of (letters of word1) x (letters of word2)

D[i,j] = soure[:i] --> target[:j]

Recall edit costs: insert 1, delete 1 & replace 2

To calculate cell D['p', 's']: p --> s

Three possibilities:
  1. insert s + delete p:
     p -> ps -> s: Cost 1+1
  2. delete p + insert s:
     p -> # -> s: Cost 1+1
  3. replace:
     p -> s: Cost 2

## Reading: Minimum edit distance algorithm (3 minutes)

- When computing the minimum edit distance, you would start with a source word and transform it into the target word.

- To go from # → #  you need a cost of 0.   
- From p → # you get 1, because that is the cost of a delete.  
- p → s is 2 because that is the minimum cost one could use to get from p to s.   

You can keep going this way by populating one element at a time.__
It turns out there is a faster way to do this. You will learn about it next.__ 



## Video: Minimum edit distance algorithm II (4 min)

There are three equations: 

- D[i,j] = D[i-1, j] + del_cost: this indicates you want to populate the current cell  
  (i,j) by using the cost in the cell found directly above.__

- D[i,j] = D[i, j-1] + ins_cost: this indicates you want to populate the current cell  
  (i,j) by using the cost in the cell found directly to its left.__

- D[i,j] = D[i-1, j-1] + rep_cost: the rep cost can be 2 or 0 depending__
  if you are going to actually replace it or not.__

At every time step you check the three possible paths where you can come from and you select the least expensive one.__

## Reading: Minimum edit distance algorithm II (5 minutes)

## Video: Minimum edit distance algorithm III (3 min)

- Minimum edit distance based on insert, delete and replace
- Known as Levenshtein distance
- Often used with backtrace
- Tabular approach is Dynamic Programming

SUMMARY OF WEEK
- What is autocorrect?
- Building the model
- Minmum Edit Distance
- Minmum Edit Distance Algorithm

- M.E.D. is the first application of Dynamic Programming in this course
- Other algorithmsa will also make use of dynamic programming

## READING: MINIMUM EDIT DISTANCE III (4 minutes)

To summarize, you have seen the levenshtein distance which specifies the cost per operation. If you need to reconstruct the path of how you got from one string to the other, you can use a backtrace. You should keep a simple pointer in each cell letting you know where you came from to get there. So you know the path taken across the table from the top left corner, to the bottom right corner. You can then reconstruct it.__

This method for computation instead of brute force is a technique known as dynamic programming. You first solve the smallest subproblem first and then reusing that result you solve the next biggest subproblem, saving that result, reusing it again, and so on. This is exactly what you did by populating each cell from the top right to the bottom left. It’s a well-known technique in computer science!__

----

## Video: Week Conclusion (s51 sec)

Good job in learning this week's materials. You now know how dynamic programming works and you can see why it is a very powerful algorithm. Just like how you can use dynamic programming to find the minimum edit distance between two strings, you can also use it to find the shortest path from point A to point B to point C, like in Google Maps. These are some very powerful models that you learned. In this week's programming assignment, you'll be implementing autocorrect, and by the end of the assignment, you will be able to feed in a typo to your model, and it will give you the most likely correction. Autocorrect, these days, uses a lot of techniques, but you will get a good baseline and understand how the concepts work. You will also learn about dynamic programming can be assigned. Next week you'll tackle part of speech tagging. Good luck in the assignment.__ 

----
