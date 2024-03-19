import { vote_back } from "../../my_motoko_project_backend";


document.getElementById("addVoterForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("voterId").value, 10);
    const name = document.getElementById("voterName").value;
    const vote = parseInt(document.getElementById("voterVote").value, 10);
    
  
    try {
        await vote_back.add_voter(id, name, vote);
        console.log("Voter added successfully");
    } catch (error) {
        console.error("Failed to add voter:", error);
    }
});

document.getElementById("getVoterForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("searchVoterId").value, 10);
    
    try {
        const voter = await vote_back.get_voter_by_id(id);
        console.log("Voter found:", voter);
    } catch (error) {
        console.error("Failed to get voter:", error);
    }
});


document.getElementById("getAllVoters").addEventListener("click", async () => {
    try {
        const voters = await vote_back.get_voters();
        console.log("All voters:", voters);
    } catch (error) {
        console.error("Failed to get all voters:", error);
    }
});