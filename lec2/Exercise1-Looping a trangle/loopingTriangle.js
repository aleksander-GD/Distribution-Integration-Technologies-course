/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

let triangle = '#';
for (let x = 0; x < 7; x++) {
    console.log(triangle)
    triangle += '#';
}