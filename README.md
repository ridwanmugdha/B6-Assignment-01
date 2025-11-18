# 🎯 B6-Assignment-01




## 1. Provide an example of using union and intersection types in TypeScript.



এই টপিকটা আমার কাছে ম্যাথের "সেট" (Set) এর মতো লাগে |

Union (|) মানে হলো যেকোনো একটা হলেই চলবে আর Intersection (&) মানে হলো সবগুলাই থাকতে হবে, কোনো মাফ নাই।

```ts
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 3, 5];

const intersection = arr1.filter(num => arr2.includes(num));
const union = [...new Set([...arr1, ...arr2])];

console.log("Intersection:", intersection);  
console.log("Union:", union);                

```

```http
Output: 

Intersection: [1, 3]
Union: [1, 2, 3, 4, 5]
```



## 2. What are some differences between interfaces and types in TypeScript?

আমি যতটুকু বুঝেছি , interface ব্যবহার করা হয়  একটা অবজেক্টে কী কী থাকবে সেটা লিখতে আর type দিয়ে অবজেক্ট ছাড়াও অন্য অনেক রকম টাইপও বানানো যায়।
