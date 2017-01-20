// ES6 Class App
class WebGLStarterKit {
  constructor(canvas, vsCode, fsCode) {
     /* Get Cavas Element and WebGL contect */
     /* Get shader scripts */
  }

  start() {
    /* Create vertices array */
    /* Execute sequence by calling functions */
  }

  draw(webGL){
    /* Draw using WebGL context */
  }

  createVertexBuffer(webGL, vertices){
    /* Define the geometry and store it in buffer objects */
  }

  createShaderProgram(webGL, vShaderCode, fShaderCode){
    /* Create and compile Shader programs */
  }

  setShaderBuffer(webGL, vertex_buffer, shaderProgram, vertexSize, coordinatesParam){
    /* Associate the shader programs to buffer objects */
  }

  setStage(webGL, [red, green, blue, alpha] = [1.0, 1.0, 1.0, 1.0]){
    /* Clear stage and set a background color */
  }
}

// instatiate WebGLStarterKit
var starterKit = new WebGLStarterKit("expCanvas", "vertexShaderCode", "fragmentShaderCode");
starterKit.start();
