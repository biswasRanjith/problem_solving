/*
2353. Design a Food Rating System
Solved
Medium
Topics
premium lock icon
Companies
Hint
Design a food rating system that can do the following:

Modify the rating of a food item listed in the system.
Return the highest-rated food item for a type of cuisine in the system.
Implement the FoodRatings class:

FoodRatings(String[] foods, String[] cuisines, int[] ratings) Initializes the system. The food items are described by foods, cuisines and ratings, all of which have a length of n.
foods[i] is the name of the ith food,
cuisines[i] is the type of cuisine of the ith food, and
ratings[i] is the initial rating of the ith food.
void changeRating(String food, int newRating) Changes the rating of the food item with the name food.
String highestRated(String cuisine) Returns the name of the food item that has the highest rating for the given type of cuisine. If there is a tie, return the item with the lexicographically smaller name.
Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

 

Example 1:

Input
["FoodRatings", "highestRated", "highestRated", "changeRating", "highestRated", "changeRating", "highestRated"]
[[["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]], ["korean"], ["japanese"], ["sushi", 16], ["japanese"], ["ramen", 16], ["japanese"]]
Output
[null, "kimchi", "ramen", null, "sushi", null, "ramen"]

Explanation
FoodRatings foodRatings = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]);
foodRatings.highestRated("korean"); // return "kimchi"
                                    // "kimchi" is the highest rated korean food with a rating of 9.
foodRatings.highestRated("japanese"); // return "ramen"
                                      // "ramen" is the highest rated japanese food with a rating of 14.
foodRatings.changeRating("sushi", 16); // "sushi" now has a rating of 16.
foodRatings.highestRated("japanese"); // return "sushi"
                                      // "sushi" is the highest rated japanese food with a rating of 16.
foodRatings.changeRating("ramen", 16); // "ramen" now has a rating of 16.
foodRatings.highestRated("japanese"); // return "ramen"
                                      // Both "sushi" and "ramen" have a rating of 16.
                                      // However, "ramen" is lexicographically smaller than "sushi".

*/

/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
     this.cuisines = {};
    this.foods = {};

    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        const cuisine = cuisines[i];
        const rating = ratings[i];

        this.foods[food] = {cuisine, rating};

        if (!this.cuisines[cuisine]) this.cuisines[cuisine] = new PriorityQueue((a, b) => {
            if (a[0] !== b[0]) return b[0] - a[0];
            return a[1].localeCompare(b[1]);
        });

        this.cuisines[cuisine].enqueue([rating, food]);
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    const { cuisine } = this.foods[food];
    this.foods[food].rating = newRating;
    this.cuisines[cuisine].enqueue([newRating, food]);
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
     const heap = this.cuisines[cuisine];

    while (!heap.isEmpty()) {
        const [rating, name] = heap.front();

        if (this.foods[name].rating === rating) {
            return name;
        } else {
            heap.dequeue();
        }
    }
};

/** 
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */


//example usage:
const foodRatings = new FoodRatings(
    ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
    ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
    [9, 12, 8, 15, 14, 7]
);
console.log(foodRatings.highestRated("korean")); // Output: "kimchi"
console.log(foodRatings.highestRated("japanese")); // Output: "ramen"
foodRatings.changeRating("sushi", 16);
console.log(foodRatings.highestRated("japanese")); // Output: "sushi"
foodRatings.changeRating("ramen", 16);
console.log(foodRatings.highestRated("japanese")); // Output: "ramen"