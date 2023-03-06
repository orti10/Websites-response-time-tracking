const axios = require('axios');

async function getDomainResponseTime(domainUrl, timeout = 5000) {
  const start = new Date().getTime();

  try {
    const response = await axios.get(domainUrl, {
      timeout: timeout
    });

    const end = new Date().getTime();
    const responseTime = end - start;

    // console.log(`Response time for ${domainUrl}: ${responseTime}ms`);
    return responseTime;
  } catch (error) {
    console.error(`Error getting response time for ${domainUrl}: ${error}`);
    throw new Error(`Failed to get response from ${domainUrl}`);
  }
}

module.exports = getDomainResponseTime;