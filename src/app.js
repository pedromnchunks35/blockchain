App = {
    loading: false,
    contracts: {},
  
    load: async () => {
      await App.loadWeb3()
      await App.loadAccount()
    },
  
    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
      if (typeof window.ethereum !== 'undefined') {
        ethereum.request({ method: 'eth_requestAccounts' });
      }else{
          window.alert("Please connect your wallet");
      }

    },

    loadAccount: async () => {
        // Set the current blockchain account
        App.account = await ethereum.request({method: 'eth_requestAccounts'})
      },

    
    
  }
  
  $(() => {
    $(window).load(() => {
      App.load()
    })
  })