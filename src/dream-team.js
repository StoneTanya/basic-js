const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = [];
  if (!Array.isArray(members)) return false;

  const filteredTeamName = members.filter((member) => typeof member === 'string');
  
  if (!filteredTeamName) return false;
  
  for (let member of filteredTeamName) {
    teamName.push(member.trim().toUpperCase().slice(0, 1));
  }
  teamName.sort((a, b) => a.localeCompare(b));
  teamName = teamName.join('');
  return teamName;
}

module.exports = {
  createDreamTeam
};
