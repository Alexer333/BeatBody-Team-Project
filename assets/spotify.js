console.log("connected");
//spotify api
curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=4a4215bf274c49afbaa180cbe9020eb1&client_secret=d4a772d537eb46edb219f26461d37ebd"

     {"access_token":"BQC06EBzY9o7GIyQXd0Dwcanw04TsRVzNwm50kI2gSVYPw_cDe52lg0U4uSdZVaLD_vU8tzcX12wxUMKsVp6Rg843MUGY2UCADIw0VasaCRDcLdik7c",
     "token_type":"Bearer",
     "expires_in":3600}

curl "https://api.spotify.com/v1/artists/0NIPkIjTV8mB795yEIiPYL?si=o9S-MAEyTke02Lw80Kkk2A" \
     -H "Authorization: Bearer  BQC06EBzY9o7GIyQXd0Dwcanw04TsRVzNwm50kI2gSVYPw_cDe52lg0U4uSdZVaLD_vU8tzcX12wxUMKsVp6Rg843MUGY2UCADIw0VasaCRDcLdik7c"

     const getRefreshToken = async () => {

        // refresh token that has been previously stored
        const refreshToken = localStorage.getItem('refresh_token');
        const url = "https://accounts.spotify.com/api/token";
     
         const payload = {
           method: 'POST',
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
           },
           body: new URLSearchParams({
             grant_type: 'refresh_token',
             refresh_token: refreshToken,
             client_id: '4a4215bf274c49afbaa180cbe9020eb1'
           }),
         }
         const body = await fetch(url, payload);
         const response= await body.json();
     
         localStorage.setItem('access_token', response.accessToken);
         localStorage.setItem('refresh_token', response.refreshToken);
       }
