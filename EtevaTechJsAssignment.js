//Given two Arrays 
let List1 = ['Arjun','Adwait', 'Swapnil','Amit','Vishal', 'Adnan'];
let List2 = ['Adwait','Laxman','Amit','Adnan','Nitin','Gaurav'];

//Convert Both the lists into Sets
let set1 = new Set(List1);
let set2 = new Set(List2);


//a. Get a unique set of users from List1 which are not in List2
//Function to get a unique elements from set1 that are not in set2 

function getUniqueNamesFromList1(set1,set2)  {
    let uniqueNames = []
    for (let users of set1){
        if(!set2.has(users)){
            uniqueNames.push(users);
        }
    }
    return uniqueNames;
}

//b. Get a unique set of users from List2 which are not in List1
//Function to get a unique elements from set2 that are not in set1 

function getUniqueNamesFromList2(set1,set2)  {
    let uniqueNames = []
    for (let users of set2){
        if(!set1.has(users)){
            uniqueNames.push(users);
        }
    }
    return uniqueNames;
}

//c.Get a set of users who are present in in List1 and List2 both (intersection of list1 & list2)
//Finding Intersection Using Sets and Filter

let intersectionSet = new Set([...set1].filter(user => set2.has(user)));
let intersectionList = Array.from(intersectionSet);


let getUniqueNamesList1 = getUniqueNamesFromList1(set1,set2);
let getUniqueNamesList2 = getUniqueNamesFromList2(set1,set2);
console.log(getUniqueNamesList1);
console.log(getUniqueNamesList2);
console.log(intersectionList);