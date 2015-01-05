adsApp.factory('publicData', function publicData($http) {
    function getAll(success, error) {
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/ads'
        })
            .success(function (data, status, headers, config) {
//                console.log("getAll");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function getCategories(success, error) {
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/categories'
        })
            .success(function (data, status, headers, config) {
//                console.log("getCategory");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function getTowns(success, error) {
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/towns'

        })
            .success(function (data, status, headers, config) {
//                console.log("getTowns");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function pageChangeTo(token, route, page, limit, category, town, success, error) {
        var categoryIdRequest = '';
        var townIdRequest = '';
        if (category) {
            categoryIdRequest = '&CategoryId=' + Number(category);
        }
        if (town) {
            townIdRequest = '&TownId=' + Number(town);
        }
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/' + route + '?startpage=' + page + '&pagesize=' + limit + categoryIdRequest + townIdRequest,
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
//                console.log("Paging");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            }
        );
    }

    function register(data, success, error) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/register',
            data: JSON.stringify(data)
        })
            .success(function (data, status, headers, config) {
//                console.log("Register");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function login(data, success, error) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/login',
            data: JSON.stringify(data)
        })
            .success(function (data, status, headers, config) {
//                console.log("Login");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function getUserAds(token, success, error) {
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads',
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
//                console.log("Get USER Data");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function deactivateUserAd(token, id, success, error) {
        $http({
            method: 'PUT',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/' + id,
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
//                console.log("Deactivate Ad");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function publishUserAd(token, id, success, error) {
        $http({
            method: 'PUT',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads/publishagain/' + id,
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
                console.log("Publish Ad");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function deleteUserAd(token, id, success, error) {
        $http({
            method: 'delete',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads/' + id,
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
//                console.log("Delete Ad");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function editUserAd(token, id, data, success, error) {
        $http({
            method: 'PUT',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads/' + id,
            headers: {Authorization: 'Bearer ' + token},
            data: JSON.stringify(data)
        })
            .success(function (data, status, headers, config) {
//                console.log("Edit Ad");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function addAd(token, data, success, error) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads',
            headers: {Authorization: 'Bearer ' + token},
            data: JSON.stringify(data)
        })
            .success(function (data, status, headers, config) {
//                console.log("addAd");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function getProfile(token, success, error) {
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/user/Profile',
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
//                console.log("Get USER Profile");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function editUserProfile(token, success, error) {
        $http({
            method: 'PUT',
            url: 'http://softuni-ads.azurewebsites.net/api/user/profile',
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
//                console.log("Get USER Profile");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function changeUserPassword(token, data, success, error) {
        $http({
            method: 'PUT',
            url: 'http://softuni-ads.azurewebsites.net/api/user/changepassword',
            headers: {Authorization: 'Bearer ' + token},
            data: JSON.stringify(data)

        })
            .success(function (data, status, headers, config) {
//                console.log("Get USER Profile");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function adminGetAll(token, success, error) {
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/admin/ads',
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function adminPageChangeTo(token, route, page, limit, category, town, status, sortBy, success, error) {
        var sortByRequest = '';
        var statusRequest = '';
        var categoryIdRequest = '';
        var townIdRequest = '';
        if (sortBy) {
            sortByRequest = 'SortBy=' + sortBy;
        }
        if (status) {
            statusRequest = '&Status=' + status;
        }
        if (category) {
            categoryIdRequest = '&CategoryId=' + Number(category);
        }
        if (town) {
            townIdRequest = '&TownId=' + Number(town);
        }
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/' + route + '?startpage=' + page + '&pagesize=' + limit + categoryIdRequest + townIdRequest + statusRequest + sortByRequest,
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
//                console.log("Paging");
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            }
        );
    }

    function adminApproveAd(token, id, success, error) {
        $http({
            method: 'PUT',
            url: 'http://softuni-ads.azurewebsites.net/api/admin/Ads/Approve/' + id,
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function adminRejectAd(token, id, success, error) {
        $http({
            method: 'PUT',
            url: 'http://softuni-ads.azurewebsites.net/api/admin/Ads/Reject/' + id,
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function adminEditAd(token, id, data, success, error) {
        $http({
            method: 'PUT',
            url: 'http://softuni-ads.azurewebsites.net/api/admin/ads/' + id,
            headers: {Authorization: 'Bearer ' + token},
            data: JSON.stringify(data)
        })
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function adminDeleteAd(token, id, success, error) {
        $http({
            method: 'delete',
            url: 'http://softuni-ads.azurewebsites.net/api/admin/ads/' + id,
            headers: {Authorization: 'Bearer ' + token}
        })
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    return{
        getAll: getAll,
        getCategories: getCategories,
        getTowns: getTowns,
        pageChangeTo: pageChangeTo,
        register: register,
        login: login,
        getUserAds: getUserAds,
        deactivateUserAd: deactivateUserAd,
        publishUserAd: publishUserAd,
        deleteUserAd: deleteUserAd,
        editUserAd: editUserAd,
        addAd: addAd,
        getProfile: getProfile,
        editUserProfile: editUserProfile,
        changeUserPassword: changeUserPassword,
        adminPageChangeTo: adminPageChangeTo,
        adminGetAll: adminGetAll,
        adminApproveAd: adminApproveAd,
        adminRejectAd: adminRejectAd,
        adminEditAd: adminEditAd,
        adminDeleteAd: adminDeleteAd
    }
});