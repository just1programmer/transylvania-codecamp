import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

import WhatIsJava from './WhatIsJava'
import VariablesAndComments from './VariablesAndComments';
import Hello from './Hello';
import Arrays from './Arrays';
import Methods from './Methods';
import Operators from './Operators';
import ReadingUserInput from './ReadingUserInput';
import Strings from './Strings';
import Conditionals from './Conditionals';
import Loops from './Loops';
import OOP from './OOP';
import ClassesAndObjects from './ClassesAndObjects';
import Interfaces from './Interfaces';
import Inheritance from './Inheritance';
import Polymorphism from './Polymorphism';
import Encapsulation from './Encapsulation';
import DBConnection from './DBConnection';
import CreatingAnAPI from './CreatingAnAPI';
import Vcs from './VCSGithubAndGit';
import GitRemoteRepos from './GitRemoteRepositories';
import GitBranching from './GitBranching';
import PMR from './PullAndMergeRequests';
import UpdatingLocalRepos from './UpdatingLocalRepos';
import MergeConflicts from './MergeConflicts';
import Exceptions from './ExceptionHandling';
import Collections from './JavaCollectionsOverview';
import Lists from './Lists';
import Sets from './Sets';
import Queues from './Queues';
import ArrayList from './ArrayList';
import HashTableHashMap from './HashTableHashMap';
import UnitTesting from './UnitTestingJUnit';

const WebPages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element= {<Hello/>} />
                <Route path = "/what-is-java"  element= {<WhatIsJava/>} />
                <Route path = "/variables-and-comments" element = {<VariablesAndComments/>} />
                <Route path = "/arrays" element = {<Arrays/>} />
                <Route path = "/methods" element = {<Methods/>} />
                <Route path = "/operators" element = {<Operators/>} />
                <Route path = "/reading-user-input" element = {<ReadingUserInput/>} />
                <Route path = "/strings"  element= {<Strings/>} />
                <Route path = "/conditionals" element = {<Conditionals/>} />
                <Route path = "/loops" element = {<Loops/>} />
                <Route path = "/object-oriented-programming-basics" element = {<OOP/>} />
                <Route path = "/classes-and-objects" element = {<ClassesAndObjects/>} />
                <Route path = "/interfaces" element = {<Interfaces/>} />
                <Route path = "/inheritance"  element= {<Inheritance/>} />
                <Route path = "/polymorphism" element = {<Polymorphism/>} />
                <Route path = "/encapsulation" element = {<Encapsulation/>} />
                <Route path = "/connecting-to-a-database" element = {<DBConnection/>} />
                <Route path = "/creating-an-api" element = {<CreatingAnAPI/>} />
                <Route path = "/vcs-github-git" element = {<Vcs/>} />
                <Route path = "/git-remote-repos"  element= {<GitRemoteRepos/>} />
                <Route path = "/git-branching" element = {<GitBranching/>} />
                <Route path = "/pull-requests-merge-requests" element = {<PMR/>} />
                <Route path = "/updating-local-repos" element = {<UpdatingLocalRepos/>} />
                <Route path = "/merge-conflicts" element = {<MergeConflicts/>} />
                <Route path = "/exception-handling-in-java" element = {<Exceptions/>} />
                <Route path="/java-collections-overview" element={<Collections/>}/>
                <Route path = "/list"  element= {<Lists/>} />
                <Route path = "/set" element = {<Sets/>} />
                <Route path = "/queue" element = {<Queues/>} />
                <Route path = "/array-list" element = {<ArrayList/>} />
                <Route path = "/hash-table-hash-map" element = {<HashTableHashMap/>} />
                <Route path = "/unit-testing-junit" element = {<UnitTesting/>} />
            </Routes>   
        </Router>
    );
};
export default WebPages;