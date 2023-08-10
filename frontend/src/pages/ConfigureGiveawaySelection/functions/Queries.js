import axios from "axios";

export const get_all_comments = async (id) => {
  console.log("fetching all comments");
  let response = await axios.post(
    "https://api.apify.com/v2/acts/apify~instagram-comment-scraper/run-sync-get-dataset-items?token=apify_api_scPbpHa0Oxa2AbzP04FtzQdoOgUdXo0BlaDL",
    {
      directUrls: ["https://www.instagram.com/p/" + localStorage.getItem('shortCode') + '/'],
      resultsLimit: 10000,
    }
  );

  return await response.data;
};

export const useCommentConfig = (
  inputArray,
  winners,
  removeDuplicates,
  filterHashtags,
  mentioned,
  keywords,
  commentsBetweenDates,
  manualExclude,
  setPage,
  user
) => {
  let newArray = [...inputArray];

  // Remove duplicates based on comment IDs
  if (removeDuplicates) {
    const uniqueArray = [];
    const uniqueIds = new Set();

    newArray.forEach((comment) => {
      if (!uniqueIds.has(comment.id)) {
        uniqueIds.add(comment.id);
        uniqueArray.push(comment);
      }
    });

    newArray = uniqueArray;
  }

  // Filter comments based on hashtags
  if (filterHashtags.length > 0) {
    const hashtags = filterHashtags.replace(/,/g, "").split(" ");
    newArray = newArray.filter((item) => {
      return hashtags.some((filterItem) => item.text.includes(filterItem));
    });
  }

  // Filter comments to include those with mentions
  if (mentioned) {
    const regex = /@\w+/g;
    newArray = newArray.filter((item) => {
      return regex.test(item.text);
    });
  }

  // Filter comments based on keywords
  if (keywords.length > 0) {
    const keywordsArr = keywords.replace(/,/g, "").split(" ");
    newArray = newArray.filter((item) => {
      return keywordsArr.some((filterItem) => item.text.includes(filterItem));
    });
  }

  // Filter comments based on dates
  if (commentsBetweenDates.length === 2) {
    const [startDate, endDate] = commentsBetweenDates;
    newArray = newArray.filter((item) => {
      const commentDate = new Date(item.timestamp.slice(0, 10));
      return commentDate >= startDate && commentDate <= endDate;
    });
  }

  // Exclude comments from specified usernames
  if (manualExclude.length > 0) {
    const excludedUsernames = manualExclude.replace(/,/g, "").split(" ");
    newArray = newArray.filter((item) => {
      return !excludedUsernames.includes(item.ownerUsername);
    });
  }

  const randomWinners = [];
  while (randomWinners.length < winners && newArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    const selectedWinner = newArray[randomIndex];
    randomWinners.push(selectedWinner);
    newArray.splice(randomIndex, 1); // Remove the selected winner to avoid duplicates
  }

  localStorage.setItem('all', JSON.stringify(inputArray));
  localStorage.setItem('winners', JSON.stringify(randomWinners));
  console.log('winners', randomWinners);
  setPage(!(user === null || user === undefined) ? 'display-winner' : 'login');
};
