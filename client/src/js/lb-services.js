// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Institution
 * @header lbServices.Institution
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Institution` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Institution",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/institutions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Institution.teachers.findById() instead.
        "prototype$__findById__teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/teachers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Institution.teachers.destroyById() instead.
        "prototype$__destroyById__teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/teachers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.teachers.updateById() instead.
        "prototype$__updateById__teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/teachers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Institution.classrooms.findById() instead.
        "prototype$__findById__classrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/classrooms/:fk",
          method: "GET"
        },

        // INTERNAL. Use Institution.classrooms.destroyById() instead.
        "prototype$__destroyById__classrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/classrooms/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.classrooms.updateById() instead.
        "prototype$__updateById__classrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/classrooms/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Institution.students.findById() instead.
        "prototype$__findById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/students/:fk",
          method: "GET"
        },

        // INTERNAL. Use Institution.students.destroyById() instead.
        "prototype$__destroyById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/students/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.students.updateById() instead.
        "prototype$__updateById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/students/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Institution.teachers() instead.
        "prototype$__get__teachers": {
          isArray: true,
          url: urlBase + "/institutions/:id/teachers",
          method: "GET"
        },

        // INTERNAL. Use Institution.teachers.create() instead.
        "prototype$__create__teachers": {
          url: urlBase + "/institutions/:id/teachers",
          method: "POST"
        },

        // INTERNAL. Use Institution.teachers.destroyAll() instead.
        "prototype$__delete__teachers": {
          url: urlBase + "/institutions/:id/teachers",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.teachers.count() instead.
        "prototype$__count__teachers": {
          url: urlBase + "/institutions/:id/teachers/count",
          method: "GET"
        },

        // INTERNAL. Use Institution.classrooms() instead.
        "prototype$__get__classrooms": {
          isArray: true,
          url: urlBase + "/institutions/:id/classrooms",
          method: "GET"
        },

        // INTERNAL. Use Institution.classrooms.create() instead.
        "prototype$__create__classrooms": {
          url: urlBase + "/institutions/:id/classrooms",
          method: "POST"
        },

        // INTERNAL. Use Institution.classrooms.destroyAll() instead.
        "prototype$__delete__classrooms": {
          url: urlBase + "/institutions/:id/classrooms",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.classrooms.count() instead.
        "prototype$__count__classrooms": {
          url: urlBase + "/institutions/:id/classrooms/count",
          method: "GET"
        },

        // INTERNAL. Use Institution.students() instead.
        "prototype$__get__students": {
          isArray: true,
          url: urlBase + "/institutions/:id/students",
          method: "GET"
        },

        // INTERNAL. Use Institution.students.create() instead.
        "prototype$__create__students": {
          url: urlBase + "/institutions/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Institution.students.destroyAll() instead.
        "prototype$__delete__students": {
          url: urlBase + "/institutions/:id/students",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.students.count() instead.
        "prototype$__count__students": {
          url: urlBase + "/institutions/:id/students/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#create
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/institutions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#createMany
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/institutions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#upsert
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/institutions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#exists
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/institutions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#findById
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/institutions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#find
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/institutions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#findOne
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/institutions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#updateAll
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/institutions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#deleteById
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/institutions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#count
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/institutions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#prototype$updateAttributes
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/institutions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Institution#createChangeStream
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/institutions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Teacher.institution() instead.
        "::get::teacher::institution": {
          url: urlBase + "/teachers/:id/institution",
          method: "GET"
        },

        // INTERNAL. Use Classroom.institution() instead.
        "::get::classroom::institution": {
          url: urlBase + "/classrooms/:id/institution",
          method: "GET"
        },

        // INTERNAL. Use Student.institution() instead.
        "::get::student::institution": {
          url: urlBase + "/students/:id/institution",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Institution#updateOrCreate
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Institution#update
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Institution#destroyById
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Institution#removeById
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Institution#modelName
    * @propertyOf lbServices.Institution
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Institution`.
    */
    R.modelName = "Institution";

    /**
     * @ngdoc object
     * @name lbServices.Institution.teachers
     * @header lbServices.Institution.teachers
     * @object
     * @description
     *
     * The object `Institution.teachers` groups methods
     * manipulating `Teacher` instances related to `Institution`.
     *
     * Call {@link lbServices.Institution#teachers Institution.teachers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Institution#teachers
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Queries teachers of institution.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::get::institution::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.teachers#count
         * @methodOf lbServices.Institution.teachers
         *
         * @description
         *
         * Counts teachers of institution.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.teachers.count = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::count::institution::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.teachers#create
         * @methodOf lbServices.Institution.teachers
         *
         * @description
         *
         * Creates a new instance in teachers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers.create = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::create::institution::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.teachers#createMany
         * @methodOf lbServices.Institution.teachers
         *
         * @description
         *
         * Creates a new instance in teachers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers.createMany = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::createMany::institution::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.teachers#destroyAll
         * @methodOf lbServices.Institution.teachers
         *
         * @description
         *
         * Deletes all teachers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.teachers.destroyAll = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::delete::institution::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.teachers#destroyById
         * @methodOf lbServices.Institution.teachers
         *
         * @description
         *
         * Delete a related item by id for teachers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.teachers.destroyById = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::destroyById::institution::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.teachers#findById
         * @methodOf lbServices.Institution.teachers
         *
         * @description
         *
         * Find a related item by id for teachers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers.findById = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::findById::institution::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.teachers#updateById
         * @methodOf lbServices.Institution.teachers
         *
         * @description
         *
         * Update a related item by id for teachers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers.updateById = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::updateById::institution::teachers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Institution.classrooms
     * @header lbServices.Institution.classrooms
     * @object
     * @description
     *
     * The object `Institution.classrooms` groups methods
     * manipulating `Classroom` instances related to `Institution`.
     *
     * Call {@link lbServices.Institution#classrooms Institution.classrooms()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Institution#classrooms
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Queries classrooms of institution.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        R.classrooms = function() {
          var TargetResource = $injector.get("Classroom");
          var action = TargetResource["::get::institution::classrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.classrooms#count
         * @methodOf lbServices.Institution.classrooms
         *
         * @description
         *
         * Counts classrooms of institution.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.classrooms.count = function() {
          var TargetResource = $injector.get("Classroom");
          var action = TargetResource["::count::institution::classrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.classrooms#create
         * @methodOf lbServices.Institution.classrooms
         *
         * @description
         *
         * Creates a new instance in classrooms of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        R.classrooms.create = function() {
          var TargetResource = $injector.get("Classroom");
          var action = TargetResource["::create::institution::classrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.classrooms#createMany
         * @methodOf lbServices.Institution.classrooms
         *
         * @description
         *
         * Creates a new instance in classrooms of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        R.classrooms.createMany = function() {
          var TargetResource = $injector.get("Classroom");
          var action = TargetResource["::createMany::institution::classrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.classrooms#destroyAll
         * @methodOf lbServices.Institution.classrooms
         *
         * @description
         *
         * Deletes all classrooms of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classrooms.destroyAll = function() {
          var TargetResource = $injector.get("Classroom");
          var action = TargetResource["::delete::institution::classrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.classrooms#destroyById
         * @methodOf lbServices.Institution.classrooms
         *
         * @description
         *
         * Delete a related item by id for classrooms.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classrooms
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classrooms.destroyById = function() {
          var TargetResource = $injector.get("Classroom");
          var action = TargetResource["::destroyById::institution::classrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.classrooms#findById
         * @methodOf lbServices.Institution.classrooms
         *
         * @description
         *
         * Find a related item by id for classrooms.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classrooms
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        R.classrooms.findById = function() {
          var TargetResource = $injector.get("Classroom");
          var action = TargetResource["::findById::institution::classrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.classrooms#updateById
         * @methodOf lbServices.Institution.classrooms
         *
         * @description
         *
         * Update a related item by id for classrooms.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for classrooms
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        R.classrooms.updateById = function() {
          var TargetResource = $injector.get("Classroom");
          var action = TargetResource["::updateById::institution::classrooms"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Institution.students
     * @header lbServices.Institution.students
     * @object
     * @description
     *
     * The object `Institution.students` groups methods
     * manipulating `Student` instances related to `Institution`.
     *
     * Call {@link lbServices.Institution#students Institution.students()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Institution#students
         * @methodOf lbServices.Institution
         *
         * @description
         *
         * Queries students of institution.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::institution::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.students#count
         * @methodOf lbServices.Institution.students
         *
         * @description
         *
         * Counts students of institution.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.students.count = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::count::institution::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.students#create
         * @methodOf lbServices.Institution.students
         *
         * @description
         *
         * Creates a new instance in students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.create = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::create::institution::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.students#createMany
         * @methodOf lbServices.Institution.students
         *
         * @description
         *
         * Creates a new instance in students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.createMany = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::createMany::institution::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.students#destroyAll
         * @methodOf lbServices.Institution.students
         *
         * @description
         *
         * Deletes all students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.students.destroyAll = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::delete::institution::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.students#destroyById
         * @methodOf lbServices.Institution.students
         *
         * @description
         *
         * Delete a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.students.destroyById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::destroyById::institution::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.students#findById
         * @methodOf lbServices.Institution.students
         *
         * @description
         *
         * Find a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.findById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::findById::institution::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Institution.students#updateById
         * @methodOf lbServices.Institution.students
         *
         * @description
         *
         * Update a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.updateById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::updateById::institution::students"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Teacher
 * @header lbServices.Teacher
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Teacher` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Teacher",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/teachers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Teacher.institution() instead.
        "prototype$__get__institution": {
          url: urlBase + "/teachers/:id/institution",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#create
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/teachers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#createMany
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/teachers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#upsert
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/teachers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#exists
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/teachers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#findById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/teachers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#find
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/teachers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#findOne
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/teachers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#updateAll
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/teachers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#deleteById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/teachers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#count
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/teachers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$updateAttributes
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/teachers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#createChangeStream
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/teachers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Institution.teachers.findById() instead.
        "::findById::institution::teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/teachers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Institution.teachers.destroyById() instead.
        "::destroyById::institution::teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/teachers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.teachers.updateById() instead.
        "::updateById::institution::teachers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/teachers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Institution.teachers() instead.
        "::get::institution::teachers": {
          isArray: true,
          url: urlBase + "/institutions/:id/teachers",
          method: "GET"
        },

        // INTERNAL. Use Institution.teachers.create() instead.
        "::create::institution::teachers": {
          url: urlBase + "/institutions/:id/teachers",
          method: "POST"
        },

        // INTERNAL. Use Institution.teachers.createMany() instead.
        "::createMany::institution::teachers": {
          isArray: true,
          url: urlBase + "/institutions/:id/teachers",
          method: "POST"
        },

        // INTERNAL. Use Institution.teachers.destroyAll() instead.
        "::delete::institution::teachers": {
          url: urlBase + "/institutions/:id/teachers",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.teachers.count() instead.
        "::count::institution::teachers": {
          url: urlBase + "/institutions/:id/teachers/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Teacher#updateOrCreate
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#update
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#destroyById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#removeById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Teacher#modelName
    * @propertyOf lbServices.Teacher
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Teacher`.
    */
    R.modelName = "Teacher";


        /**
         * @ngdoc method
         * @name lbServices.Teacher#institution
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Fetches belongsTo relation institution.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        R.institution = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::get::teacher::institution"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Classroom
 * @header lbServices.Classroom
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Classroom` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Classroom",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/classrooms/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Classroom.institution() instead.
        "prototype$__get__institution": {
          url: urlBase + "/classrooms/:id/institution",
          method: "GET"
        },

        // INTERNAL. Use Classroom.students.findById() instead.
        "prototype$__findById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/classrooms/:id/students/:fk",
          method: "GET"
        },

        // INTERNAL. Use Classroom.students.destroyById() instead.
        "prototype$__destroyById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/classrooms/:id/students/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Classroom.students.updateById() instead.
        "prototype$__updateById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/classrooms/:id/students/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Classroom.students() instead.
        "prototype$__get__students": {
          isArray: true,
          url: urlBase + "/classrooms/:id/students",
          method: "GET"
        },

        // INTERNAL. Use Classroom.students.create() instead.
        "prototype$__create__students": {
          url: urlBase + "/classrooms/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Classroom.students.destroyAll() instead.
        "prototype$__delete__students": {
          url: urlBase + "/classrooms/:id/students",
          method: "DELETE"
        },

        // INTERNAL. Use Classroom.students.count() instead.
        "prototype$__count__students": {
          url: urlBase + "/classrooms/:id/students/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#create
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/classrooms",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#createMany
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/classrooms",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#upsert
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/classrooms",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#exists
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/classrooms/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#findById
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/classrooms/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#find
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/classrooms",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#findOne
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/classrooms/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#updateAll
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/classrooms/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#deleteById
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/classrooms/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#count
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/classrooms/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#prototype$updateAttributes
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/classrooms/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Classroom#createChangeStream
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/classrooms/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Institution.classrooms.findById() instead.
        "::findById::institution::classrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/classrooms/:fk",
          method: "GET"
        },

        // INTERNAL. Use Institution.classrooms.destroyById() instead.
        "::destroyById::institution::classrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/classrooms/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.classrooms.updateById() instead.
        "::updateById::institution::classrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/classrooms/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Institution.classrooms() instead.
        "::get::institution::classrooms": {
          isArray: true,
          url: urlBase + "/institutions/:id/classrooms",
          method: "GET"
        },

        // INTERNAL. Use Institution.classrooms.create() instead.
        "::create::institution::classrooms": {
          url: urlBase + "/institutions/:id/classrooms",
          method: "POST"
        },

        // INTERNAL. Use Institution.classrooms.createMany() instead.
        "::createMany::institution::classrooms": {
          isArray: true,
          url: urlBase + "/institutions/:id/classrooms",
          method: "POST"
        },

        // INTERNAL. Use Institution.classrooms.destroyAll() instead.
        "::delete::institution::classrooms": {
          url: urlBase + "/institutions/:id/classrooms",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.classrooms.count() instead.
        "::count::institution::classrooms": {
          url: urlBase + "/institutions/:id/classrooms/count",
          method: "GET"
        },

        // INTERNAL. Use Student.classroom() instead.
        "::get::student::classroom": {
          url: urlBase + "/students/:id/classroom",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Classroom#updateOrCreate
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Classroom#update
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Classroom#destroyById
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Classroom#removeById
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Classroom#modelName
    * @propertyOf lbServices.Classroom
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Classroom`.
    */
    R.modelName = "Classroom";


        /**
         * @ngdoc method
         * @name lbServices.Classroom#institution
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Fetches belongsTo relation institution.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        R.institution = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::get::classroom::institution"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Classroom.students
     * @header lbServices.Classroom.students
     * @object
     * @description
     *
     * The object `Classroom.students` groups methods
     * manipulating `Student` instances related to `Classroom`.
     *
     * Call {@link lbServices.Classroom#students Classroom.students()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Classroom#students
         * @methodOf lbServices.Classroom
         *
         * @description
         *
         * Queries students of classroom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::classroom::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Classroom.students#count
         * @methodOf lbServices.Classroom.students
         *
         * @description
         *
         * Counts students of classroom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.students.count = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::count::classroom::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Classroom.students#create
         * @methodOf lbServices.Classroom.students
         *
         * @description
         *
         * Creates a new instance in students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.create = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::create::classroom::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Classroom.students#createMany
         * @methodOf lbServices.Classroom.students
         *
         * @description
         *
         * Creates a new instance in students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.createMany = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::createMany::classroom::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Classroom.students#destroyAll
         * @methodOf lbServices.Classroom.students
         *
         * @description
         *
         * Deletes all students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.students.destroyAll = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::delete::classroom::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Classroom.students#destroyById
         * @methodOf lbServices.Classroom.students
         *
         * @description
         *
         * Delete a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.students.destroyById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::destroyById::classroom::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Classroom.students#findById
         * @methodOf lbServices.Classroom.students
         *
         * @description
         *
         * Find a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.findById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::findById::classroom::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Classroom.students#updateById
         * @methodOf lbServices.Classroom.students
         *
         * @description
         *
         * Update a related item by id for students.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.updateById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::updateById::classroom::students"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Student
 * @header lbServices.Student
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Student` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Student",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/students/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Student.institution() instead.
        "prototype$__get__institution": {
          url: urlBase + "/students/:id/institution",
          method: "GET"
        },

        // INTERNAL. Use Student.classroom() instead.
        "prototype$__get__classroom": {
          url: urlBase + "/students/:id/classroom",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#create
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/students",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#createMany
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/students",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#upsert
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/students",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#exists
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/students/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#findById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/students/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#find
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/students",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#findOne
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/students/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#updateAll
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/students/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#deleteById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/students/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#count
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/students/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$updateAttributes
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/students/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#createChangeStream
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/students/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Institution.students.findById() instead.
        "::findById::institution::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/students/:fk",
          method: "GET"
        },

        // INTERNAL. Use Institution.students.destroyById() instead.
        "::destroyById::institution::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/students/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.students.updateById() instead.
        "::updateById::institution::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/institutions/:id/students/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Institution.students() instead.
        "::get::institution::students": {
          isArray: true,
          url: urlBase + "/institutions/:id/students",
          method: "GET"
        },

        // INTERNAL. Use Institution.students.create() instead.
        "::create::institution::students": {
          url: urlBase + "/institutions/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Institution.students.createMany() instead.
        "::createMany::institution::students": {
          isArray: true,
          url: urlBase + "/institutions/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Institution.students.destroyAll() instead.
        "::delete::institution::students": {
          url: urlBase + "/institutions/:id/students",
          method: "DELETE"
        },

        // INTERNAL. Use Institution.students.count() instead.
        "::count::institution::students": {
          url: urlBase + "/institutions/:id/students/count",
          method: "GET"
        },

        // INTERNAL. Use Classroom.students.findById() instead.
        "::findById::classroom::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/classrooms/:id/students/:fk",
          method: "GET"
        },

        // INTERNAL. Use Classroom.students.destroyById() instead.
        "::destroyById::classroom::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/classrooms/:id/students/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Classroom.students.updateById() instead.
        "::updateById::classroom::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/classrooms/:id/students/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Classroom.students() instead.
        "::get::classroom::students": {
          isArray: true,
          url: urlBase + "/classrooms/:id/students",
          method: "GET"
        },

        // INTERNAL. Use Classroom.students.create() instead.
        "::create::classroom::students": {
          url: urlBase + "/classrooms/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Classroom.students.createMany() instead.
        "::createMany::classroom::students": {
          isArray: true,
          url: urlBase + "/classrooms/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Classroom.students.destroyAll() instead.
        "::delete::classroom::students": {
          url: urlBase + "/classrooms/:id/students",
          method: "DELETE"
        },

        // INTERNAL. Use Classroom.students.count() instead.
        "::count::classroom::students": {
          url: urlBase + "/classrooms/:id/students/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Student#updateOrCreate
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Student#update
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Student#destroyById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Student#removeById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Student#modelName
    * @propertyOf lbServices.Student
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Student`.
    */
    R.modelName = "Student";


        /**
         * @ngdoc method
         * @name lbServices.Student#institution
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Fetches belongsTo relation institution.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Institution` object.)
         * </em>
         */
        R.institution = function() {
          var TargetResource = $injector.get("Institution");
          var action = TargetResource["::get::student::institution"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student#classroom
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Fetches belongsTo relation classroom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Classroom` object.)
         * </em>
         */
        R.classroom = function() {
          var TargetResource = $injector.get("Classroom");
          var action = TargetResource["::get::student::classroom"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
