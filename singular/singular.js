var Singular = {
  singularLocation: document.getElementsByTagName("script")[document.getElementsByTagName("script").length-1].src,
  properties: {
    onIdentityChange: function () {},
    clientId: "client",
    checkInterval: 1000,
    uaaLocation: 'http://localhost:8080/uaa',
    storageKey: 'singularUserIdentityClaims',
    authTimeout: 20000
  },

  init: function (params) {
    for (var p in params) {
      this.properties[p] = params[p];
    }

    this.sessionFrame = document.createElement("iframe");
    var invisible = "display: none;";
    this.sessionFrame.style = invisible;
    this.sessionFrame.src = this.properties.uaaLocation + "/session?clientId=" + this.properties.clientId + "&messageOrigin=" + encodeURIComponent(window.location.origin);
    document.body.appendChild(this.sessionFrame);

    var clientFrame = document.createElement("iframe");
    clientFrame.style = invisible;
    clientFrame.src = this.singularLocation.substring(0, this.singularLocation.lastIndexOf('/')) + "/client_frame.html";
    document.body.appendChild(clientFrame);
  }
};