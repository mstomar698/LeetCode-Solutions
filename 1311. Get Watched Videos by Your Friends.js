// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1311 lang=javascript
 *
 * [1311]  Get Watched Videos by Your Friends
 */

// @lc code=start
/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
const watchedVideosByFriends = function (watchedVideos, friends, id, level) {
  let n = friends.length;
  let visit = Array(n).fill(0);
  visit[id] = 1;
  let q = [id]; // level friend queue
  for (let i = 1; i <= level; i++) {
    let tmp = []; // save each level new friend id
    for (const e of q) {
      for (const fid of friends[e]) {
        if (visit[fid]) continue;
        visit[fid] = 1;
        tmp.push(fid);
      }
    }
    q = tmp; // update queue with new friend
  }
  let m = new Map(); // freq map
  for (const fid of q) {
    for (const video of watchedVideos[fid]) {
      m.set(video, m.get(video) + 1 || 1);
    }
  }
  let res = Array.from(m.keys());
  res.sort((x, y) => {
    let cx = m.get(x);
    let cy = m.get(y);
    if (cx == cy) {
      return x.localeCompare(y); // order alphabetically when same freq
    }
    return cx - cy;
  });
  return res;
};

// @lc code=end
