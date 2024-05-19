<!--  a complex system may be an accurate reflection of our immature understanding of a complex problem.  -->

<!-- A somewhat ramshackle rat's nest might be a state-of-the-art architecture for a poorly understood domain -->

<!-- A certain amount of controlled chaos is natural during construction, and can be tolerated, as long as you clean up after yourself eventually. -->

<!-- gain more experience in such domains, we should increasingly direct our energies to gleaning more enduring architectural abstractions from them. -->

// Workmanship: Architects who live in the house they are building have an obvious incentive to insure that things are done properly, since they will directly reap the consequences when they do not. The idea of the architect-builder is a central theme of Alexander's work. Who better to resolve the forces impinging upon each design issue as it arises as the person who is going to have to live with these decisions? The architect-builder will be the direct beneficiary of his or her own workmanship and care. Mistakes and shortcuts will merely foul his or her own nest.

// Design space might be thought of as a vast, dark, largely unexplored forest. Useful potential paths through it might be thought of as encompassing working programs. The space off to the sides of these paths is much larger realm of non-working programs. From any given point, a few small steps in most directions take you from a working to a non-working program. From time to time, there are forks in the path, indicating a choice among working alternatives. In unexplored territory, the prudent strategy is never to stray too far from the path. Now, if one has a map, a shortcut through the trekless thicket that might save miles may be evident. Of course, pioneers, by definition, don’t have maps. By taking small steps in any direction, they know that it is never more than a few steps back to a working system.

// Some years ago, Harlan Mills proposed that any software system should be grown by incremental development. That is, the system first be made to run, even though it does nothing useful except call the proper set of dummy subprograms. Then, bit by bit, it is fleshed out, with the subprograms in turn being developed into actions or calls to empty stubs in the level below.

// …

// Nothing in the past decade has so radically changed my own practice, and its effectiveness.

// …

// One always has, at every stage, in the process, a working system. I find that teams can grow much more complex entities in four months than they can build.
Microsoft mandates that a DAILY BUILD of each product be performed at the end of each working day. Nortel adheres to the slightly less demanding requirement that a working build be generated at the end of each week [Brooks 1995][Cusumano & Shelby 1995]. Indeed, this approach, and keeping the last working version around, are nearly universal practices among successful maintenance programmers.

Another vital factor in ensuring a system's continued vitality is a commitment to rigorous testing [Marick 1995][Bach 1994]. It's hard to keep a system working if you don't have a way of making sure it works. Testing is one of pillars of Extreme Programming. XP practices call for the development of unit tests before a single line of code is written.

"Our basic argument is that there isn't any such thing as a building. A building properly conceived is several layers of longevity of built components".

Therefore, factor your system so that artifacts that change at similar rates are together.
"separate that which changes from that which doesn't" [Roberts & Johnson 1998] writ large.

There is a limit to how much chaos an individual can tolerate before being overwhelmed. At first glance, a BIG BALL OF MUD can inspire terror and despair in the hearts of those who would try to tame it. The first step on the road to architectural integrity can be to identify the disordered parts of the system, and isolate them from the rest of it. Once the problem areas are identified and hemmed in, they can be gentrified using a divide and conquer strategy.
