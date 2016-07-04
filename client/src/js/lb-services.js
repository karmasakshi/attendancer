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

        // INTERNAL. Use Student.subjects.findById() instead.
        "prototype$__findById__subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.subjects.destroyById() instead.
        "prototype$__destroyById__subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.subjects.updateById() instead.
        "prototype$__updateById__subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.subjects.link() instead.
        "prototype$__link__subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.subjects.unlink() instead.
        "prototype$__unlink__subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.subjects.exists() instead.
        "prototype$__exists__subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Student.absentees.findById() instead.
        "prototype$__findById__absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/absentees/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.absentees.destroyById() instead.
        "prototype$__destroyById__absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/absentees/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.absentees.updateById() instead.
        "prototype$__updateById__absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/absentees/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.subjects() instead.
        "prototype$__get__subjects": {
          isArray: true,
          url: urlBase + "/students/:id/subjects",
          method: "GET"
        },

        // INTERNAL. Use Student.subjects.create() instead.
        "prototype$__create__subjects": {
          url: urlBase + "/students/:id/subjects",
          method: "POST"
        },

        // INTERNAL. Use Student.subjects.destroyAll() instead.
        "prototype$__delete__subjects": {
          url: urlBase + "/students/:id/subjects",
          method: "DELETE"
        },

        // INTERNAL. Use Student.subjects.count() instead.
        "prototype$__count__subjects": {
          url: urlBase + "/students/:id/subjects/count",
          method: "GET"
        },

        // INTERNAL. Use Student.absentees() instead.
        "prototype$__get__absentees": {
          isArray: true,
          url: urlBase + "/students/:id/absentees",
          method: "GET"
        },

        // INTERNAL. Use Student.absentees.create() instead.
        "prototype$__create__absentees": {
          url: urlBase + "/students/:id/absentees",
          method: "POST"
        },

        // INTERNAL. Use Student.absentees.destroyAll() instead.
        "prototype$__delete__absentees": {
          url: urlBase + "/students/:id/absentees",
          method: "DELETE"
        },

        // INTERNAL. Use Student.absentees.count() instead.
        "prototype$__count__absentees": {
          url: urlBase + "/students/:id/absentees/count",
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

        // INTERNAL. Use Subject.students.findById() instead.
        "::findById::subject::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/:fk",
          method: "GET"
        },

        // INTERNAL. Use Subject.students.destroyById() instead.
        "::destroyById::subject::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Subject.students.updateById() instead.
        "::updateById::subject::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Subject.students.link() instead.
        "::link::subject::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Subject.students.unlink() instead.
        "::unlink::subject::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Subject.students.exists() instead.
        "::exists::subject::students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Subject.students() instead.
        "::get::subject::students": {
          isArray: true,
          url: urlBase + "/subjects/:id/students",
          method: "GET"
        },

        // INTERNAL. Use Subject.students.create() instead.
        "::create::subject::students": {
          url: urlBase + "/subjects/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Subject.students.createMany() instead.
        "::createMany::subject::students": {
          isArray: true,
          url: urlBase + "/subjects/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Subject.students.destroyAll() instead.
        "::delete::subject::students": {
          url: urlBase + "/subjects/:id/students",
          method: "DELETE"
        },

        // INTERNAL. Use Subject.students.count() instead.
        "::count::subject::students": {
          url: urlBase + "/subjects/:id/students/count",
          method: "GET"
        },

        // INTERNAL. Use Absentee.student() instead.
        "::get::absentee::student": {
          url: urlBase + "/absentees/:id/student",
          method: "GET"
        },

        // INTERNAL. Use Absentee.student.create() instead.
        "::create::absentee::student": {
          url: urlBase + "/absentees/:id/student",
          method: "POST"
        },

        // INTERNAL. Use Absentee.student.createMany() instead.
        "::createMany::absentee::student": {
          isArray: true,
          url: urlBase + "/absentees/:id/student",
          method: "POST"
        },

        // INTERNAL. Use Absentee.student.update() instead.
        "::update::absentee::student": {
          url: urlBase + "/absentees/:id/student",
          method: "PUT"
        },

        // INTERNAL. Use Absentee.student.destroy() instead.
        "::destroy::absentee::student": {
          url: urlBase + "/absentees/:id/student",
          method: "DELETE"
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
     * @ngdoc object
     * @name lbServices.Student.subjects
     * @header lbServices.Student.subjects
     * @object
     * @description
     *
     * The object `Student.subjects` groups methods
     * manipulating `Subject` instances related to `Student`.
     *
     * Call {@link lbServices.Student#subjects Student.subjects()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Student#subjects
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Queries subjects of student.
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::get::student::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.subjects#count
         * @methodOf lbServices.Student.subjects
         *
         * @description
         *
         * Counts subjects of student.
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
        R.subjects.count = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::count::student::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.subjects#create
         * @methodOf lbServices.Student.subjects
         *
         * @description
         *
         * Creates a new instance in subjects of this model.
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects.create = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::create::student::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.subjects#createMany
         * @methodOf lbServices.Student.subjects
         *
         * @description
         *
         * Creates a new instance in subjects of this model.
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects.createMany = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::createMany::student::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.subjects#destroyAll
         * @methodOf lbServices.Student.subjects
         *
         * @description
         *
         * Deletes all subjects of this model.
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
        R.subjects.destroyAll = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::delete::student::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.subjects#destroyById
         * @methodOf lbServices.Student.subjects
         *
         * @description
         *
         * Delete a related item by id for subjects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subjects
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
        R.subjects.destroyById = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::destroyById::student::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.subjects#exists
         * @methodOf lbServices.Student.subjects
         *
         * @description
         *
         * Check the existence of subjects relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subjects
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects.exists = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::exists::student::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.subjects#findById
         * @methodOf lbServices.Student.subjects
         *
         * @description
         *
         * Find a related item by id for subjects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subjects
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects.findById = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::findById::student::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.subjects#link
         * @methodOf lbServices.Student.subjects
         *
         * @description
         *
         * Add a related item by id for subjects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subjects
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects.link = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::link::student::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.subjects#unlink
         * @methodOf lbServices.Student.subjects
         *
         * @description
         *
         * Remove the subjects relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subjects
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
        R.subjects.unlink = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::unlink::student::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.subjects#updateById
         * @methodOf lbServices.Student.subjects
         *
         * @description
         *
         * Update a related item by id for subjects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subjects
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects.updateById = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::updateById::student::subjects"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Student.absentees
     * @header lbServices.Student.absentees
     * @object
     * @description
     *
     * The object `Student.absentees` groups methods
     * manipulating `Absentee` instances related to `Student`.
     *
     * Call {@link lbServices.Student#absentees Student.absentees()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Student#absentees
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Queries absentees of student.
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R.absentees = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::get::student::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.absentees#count
         * @methodOf lbServices.Student.absentees
         *
         * @description
         *
         * Counts absentees of student.
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
        R.absentees.count = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::count::student::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.absentees#create
         * @methodOf lbServices.Student.absentees
         *
         * @description
         *
         * Creates a new instance in absentees of this model.
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R.absentees.create = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::create::student::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.absentees#createMany
         * @methodOf lbServices.Student.absentees
         *
         * @description
         *
         * Creates a new instance in absentees of this model.
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R.absentees.createMany = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::createMany::student::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.absentees#destroyAll
         * @methodOf lbServices.Student.absentees
         *
         * @description
         *
         * Deletes all absentees of this model.
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
        R.absentees.destroyAll = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::delete::student::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.absentees#destroyById
         * @methodOf lbServices.Student.absentees
         *
         * @description
         *
         * Delete a related item by id for absentees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for absentees
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
        R.absentees.destroyById = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::destroyById::student::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.absentees#findById
         * @methodOf lbServices.Student.absentees
         *
         * @description
         *
         * Find a related item by id for absentees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for absentees
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R.absentees.findById = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::findById::student::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.absentees#updateById
         * @methodOf lbServices.Student.absentees
         *
         * @description
         *
         * Update a related item by id for absentees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for absentees
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R.absentees.updateById = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::updateById::student::absentees"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Grade
 * @header lbServices.Grade
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Grade` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Grade",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/grades/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Grade.subjects.findById() instead.
        "prototype$__findById__subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/grades/:id/subjects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Grade.subjects.destroyById() instead.
        "prototype$__destroyById__subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/grades/:id/subjects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Grade.subjects.updateById() instead.
        "prototype$__updateById__subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/grades/:id/subjects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Grade.subjects() instead.
        "prototype$__get__subjects": {
          isArray: true,
          url: urlBase + "/grades/:id/subjects",
          method: "GET"
        },

        // INTERNAL. Use Grade.subjects.create() instead.
        "prototype$__create__subjects": {
          url: urlBase + "/grades/:id/subjects",
          method: "POST"
        },

        // INTERNAL. Use Grade.subjects.destroyAll() instead.
        "prototype$__delete__subjects": {
          url: urlBase + "/grades/:id/subjects",
          method: "DELETE"
        },

        // INTERNAL. Use Grade.subjects.count() instead.
        "prototype$__count__subjects": {
          url: urlBase + "/grades/:id/subjects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#create
         * @methodOf lbServices.Grade
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/grades",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#createMany
         * @methodOf lbServices.Grade
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/grades",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#upsert
         * @methodOf lbServices.Grade
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/grades",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#exists
         * @methodOf lbServices.Grade
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
          url: urlBase + "/grades/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#findById
         * @methodOf lbServices.Grade
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/grades/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#find
         * @methodOf lbServices.Grade
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/grades",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#findOne
         * @methodOf lbServices.Grade
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/grades/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#updateAll
         * @methodOf lbServices.Grade
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
          url: urlBase + "/grades/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#deleteById
         * @methodOf lbServices.Grade
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/grades/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#count
         * @methodOf lbServices.Grade
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
          url: urlBase + "/grades/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#prototype$updateAttributes
         * @methodOf lbServices.Grade
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/grades/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Grade#createChangeStream
         * @methodOf lbServices.Grade
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
          url: urlBase + "/grades/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Subject.grade() instead.
        "::get::subject::grade": {
          url: urlBase + "/subjects/:id/grade",
          method: "GET"
        },

        // INTERNAL. Use Subject.grade.create() instead.
        "::create::subject::grade": {
          url: urlBase + "/subjects/:id/grade",
          method: "POST"
        },

        // INTERNAL. Use Subject.grade.createMany() instead.
        "::createMany::subject::grade": {
          isArray: true,
          url: urlBase + "/subjects/:id/grade",
          method: "POST"
        },

        // INTERNAL. Use Subject.grade.update() instead.
        "::update::subject::grade": {
          url: urlBase + "/subjects/:id/grade",
          method: "PUT"
        },

        // INTERNAL. Use Subject.grade.destroy() instead.
        "::destroy::subject::grade": {
          url: urlBase + "/subjects/:id/grade",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Grade#updateOrCreate
         * @methodOf lbServices.Grade
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Grade#update
         * @methodOf lbServices.Grade
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
         * @name lbServices.Grade#destroyById
         * @methodOf lbServices.Grade
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Grade#removeById
         * @methodOf lbServices.Grade
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Grade#modelName
    * @propertyOf lbServices.Grade
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Grade`.
    */
    R.modelName = "Grade";

    /**
     * @ngdoc object
     * @name lbServices.Grade.subjects
     * @header lbServices.Grade.subjects
     * @object
     * @description
     *
     * The object `Grade.subjects` groups methods
     * manipulating `Subject` instances related to `Grade`.
     *
     * Call {@link lbServices.Grade#subjects Grade.subjects()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Grade#subjects
         * @methodOf lbServices.Grade
         *
         * @description
         *
         * Queries subjects of grade.
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::get::grade::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Grade.subjects#count
         * @methodOf lbServices.Grade.subjects
         *
         * @description
         *
         * Counts subjects of grade.
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
        R.subjects.count = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::count::grade::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Grade.subjects#create
         * @methodOf lbServices.Grade.subjects
         *
         * @description
         *
         * Creates a new instance in subjects of this model.
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects.create = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::create::grade::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Grade.subjects#createMany
         * @methodOf lbServices.Grade.subjects
         *
         * @description
         *
         * Creates a new instance in subjects of this model.
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects.createMany = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::createMany::grade::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Grade.subjects#destroyAll
         * @methodOf lbServices.Grade.subjects
         *
         * @description
         *
         * Deletes all subjects of this model.
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
        R.subjects.destroyAll = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::delete::grade::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Grade.subjects#destroyById
         * @methodOf lbServices.Grade.subjects
         *
         * @description
         *
         * Delete a related item by id for subjects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subjects
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
        R.subjects.destroyById = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::destroyById::grade::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Grade.subjects#findById
         * @methodOf lbServices.Grade.subjects
         *
         * @description
         *
         * Find a related item by id for subjects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subjects
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects.findById = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::findById::grade::subjects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Grade.subjects#updateById
         * @methodOf lbServices.Grade.subjects
         *
         * @description
         *
         * Update a related item by id for subjects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subjects
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R.subjects.updateById = function() {
          var TargetResource = $injector.get("Subject");
          var action = TargetResource["::updateById::grade::subjects"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Subject
 * @header lbServices.Subject
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Subject` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Subject",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/subjects/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Subject.grade() instead.
        "prototype$__get__grade": {
          url: urlBase + "/subjects/:id/grade",
          method: "GET"
        },

        // INTERNAL. Use Subject.grade.create() instead.
        "prototype$__create__grade": {
          url: urlBase + "/subjects/:id/grade",
          method: "POST"
        },

        // INTERNAL. Use Subject.grade.update() instead.
        "prototype$__update__grade": {
          url: urlBase + "/subjects/:id/grade",
          method: "PUT"
        },

        // INTERNAL. Use Subject.grade.destroy() instead.
        "prototype$__destroy__grade": {
          url: urlBase + "/subjects/:id/grade",
          method: "DELETE"
        },

        // INTERNAL. Use Subject.students.findById() instead.
        "prototype$__findById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/:fk",
          method: "GET"
        },

        // INTERNAL. Use Subject.students.destroyById() instead.
        "prototype$__destroyById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Subject.students.updateById() instead.
        "prototype$__updateById__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Subject.students.link() instead.
        "prototype$__link__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Subject.students.unlink() instead.
        "prototype$__unlink__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Subject.students.exists() instead.
        "prototype$__exists__students": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subjects/:id/students/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Subject.students() instead.
        "prototype$__get__students": {
          isArray: true,
          url: urlBase + "/subjects/:id/students",
          method: "GET"
        },

        // INTERNAL. Use Subject.students.create() instead.
        "prototype$__create__students": {
          url: urlBase + "/subjects/:id/students",
          method: "POST"
        },

        // INTERNAL. Use Subject.students.destroyAll() instead.
        "prototype$__delete__students": {
          url: urlBase + "/subjects/:id/students",
          method: "DELETE"
        },

        // INTERNAL. Use Subject.students.count() instead.
        "prototype$__count__students": {
          url: urlBase + "/subjects/:id/students/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#create
         * @methodOf lbServices.Subject
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/subjects",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#createMany
         * @methodOf lbServices.Subject
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/subjects",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#upsert
         * @methodOf lbServices.Subject
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/subjects",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#exists
         * @methodOf lbServices.Subject
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
          url: urlBase + "/subjects/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#findById
         * @methodOf lbServices.Subject
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/subjects/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#find
         * @methodOf lbServices.Subject
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/subjects",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#findOne
         * @methodOf lbServices.Subject
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/subjects/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#updateAll
         * @methodOf lbServices.Subject
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
          url: urlBase + "/subjects/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#deleteById
         * @methodOf lbServices.Subject
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/subjects/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#count
         * @methodOf lbServices.Subject
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
          url: urlBase + "/subjects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#prototype$updateAttributes
         * @methodOf lbServices.Subject
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/subjects/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subject#createChangeStream
         * @methodOf lbServices.Subject
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
          url: urlBase + "/subjects/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Student.subjects.findById() instead.
        "::findById::student::subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.subjects.destroyById() instead.
        "::destroyById::student::subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.subjects.updateById() instead.
        "::updateById::student::subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.subjects.link() instead.
        "::link::student::subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.subjects.unlink() instead.
        "::unlink::student::subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.subjects.exists() instead.
        "::exists::student::subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/subjects/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Student.subjects() instead.
        "::get::student::subjects": {
          isArray: true,
          url: urlBase + "/students/:id/subjects",
          method: "GET"
        },

        // INTERNAL. Use Student.subjects.create() instead.
        "::create::student::subjects": {
          url: urlBase + "/students/:id/subjects",
          method: "POST"
        },

        // INTERNAL. Use Student.subjects.createMany() instead.
        "::createMany::student::subjects": {
          isArray: true,
          url: urlBase + "/students/:id/subjects",
          method: "POST"
        },

        // INTERNAL. Use Student.subjects.destroyAll() instead.
        "::delete::student::subjects": {
          url: urlBase + "/students/:id/subjects",
          method: "DELETE"
        },

        // INTERNAL. Use Student.subjects.count() instead.
        "::count::student::subjects": {
          url: urlBase + "/students/:id/subjects/count",
          method: "GET"
        },

        // INTERNAL. Use Grade.subjects.findById() instead.
        "::findById::grade::subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/grades/:id/subjects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Grade.subjects.destroyById() instead.
        "::destroyById::grade::subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/grades/:id/subjects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Grade.subjects.updateById() instead.
        "::updateById::grade::subjects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/grades/:id/subjects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Grade.subjects() instead.
        "::get::grade::subjects": {
          isArray: true,
          url: urlBase + "/grades/:id/subjects",
          method: "GET"
        },

        // INTERNAL. Use Grade.subjects.create() instead.
        "::create::grade::subjects": {
          url: urlBase + "/grades/:id/subjects",
          method: "POST"
        },

        // INTERNAL. Use Grade.subjects.createMany() instead.
        "::createMany::grade::subjects": {
          isArray: true,
          url: urlBase + "/grades/:id/subjects",
          method: "POST"
        },

        // INTERNAL. Use Grade.subjects.destroyAll() instead.
        "::delete::grade::subjects": {
          url: urlBase + "/grades/:id/subjects",
          method: "DELETE"
        },

        // INTERNAL. Use Grade.subjects.count() instead.
        "::count::grade::subjects": {
          url: urlBase + "/grades/:id/subjects/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Subject#updateOrCreate
         * @methodOf lbServices.Subject
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Subject#update
         * @methodOf lbServices.Subject
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
         * @name lbServices.Subject#destroyById
         * @methodOf lbServices.Subject
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Subject#removeById
         * @methodOf lbServices.Subject
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
         * This usually means the response is a `Subject` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Subject#modelName
    * @propertyOf lbServices.Subject
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Subject`.
    */
    R.modelName = "Subject";

    /**
     * @ngdoc object
     * @name lbServices.Subject.grade
     * @header lbServices.Subject.grade
     * @object
     * @description
     *
     * The object `Subject.grade` groups methods
     * manipulating `Grade` instances related to `Subject`.
     *
     * Call {@link lbServices.Subject#grade Subject.grade()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Subject#grade
         * @methodOf lbServices.Subject
         *
         * @description
         *
         * Fetches hasOne relation grade.
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        R.grade = function() {
          var TargetResource = $injector.get("Grade");
          var action = TargetResource["::get::subject::grade"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.grade#create
         * @methodOf lbServices.Subject.grade
         *
         * @description
         *
         * Creates a new instance in grade of this model.
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        R.grade.create = function() {
          var TargetResource = $injector.get("Grade");
          var action = TargetResource["::create::subject::grade"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.grade#createMany
         * @methodOf lbServices.Subject.grade
         *
         * @description
         *
         * Creates a new instance in grade of this model.
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        R.grade.createMany = function() {
          var TargetResource = $injector.get("Grade");
          var action = TargetResource["::createMany::subject::grade"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.grade#destroy
         * @methodOf lbServices.Subject.grade
         *
         * @description
         *
         * Deletes grade of this model.
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
        R.grade.destroy = function() {
          var TargetResource = $injector.get("Grade");
          var action = TargetResource["::destroy::subject::grade"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.grade#update
         * @methodOf lbServices.Subject.grade
         *
         * @description
         *
         * Update grade of this model.
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
         * This usually means the response is a `Grade` object.)
         * </em>
         */
        R.grade.update = function() {
          var TargetResource = $injector.get("Grade");
          var action = TargetResource["::update::subject::grade"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Subject.students
     * @header lbServices.Subject.students
     * @object
     * @description
     *
     * The object `Subject.students` groups methods
     * manipulating `Student` instances related to `Subject`.
     *
     * Call {@link lbServices.Subject#students Subject.students()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Subject#students
         * @methodOf lbServices.Subject
         *
         * @description
         *
         * Queries students of subject.
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
          var action = TargetResource["::get::subject::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.students#count
         * @methodOf lbServices.Subject.students
         *
         * @description
         *
         * Counts students of subject.
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
          var action = TargetResource["::count::subject::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.students#create
         * @methodOf lbServices.Subject.students
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
          var action = TargetResource["::create::subject::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.students#createMany
         * @methodOf lbServices.Subject.students
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
          var action = TargetResource["::createMany::subject::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.students#destroyAll
         * @methodOf lbServices.Subject.students
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
          var action = TargetResource["::delete::subject::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.students#destroyById
         * @methodOf lbServices.Subject.students
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
          var action = TargetResource["::destroyById::subject::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.students#exists
         * @methodOf lbServices.Subject.students
         *
         * @description
         *
         * Check the existence of students relation to an item by id.
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
        R.students.exists = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::exists::subject::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.students#findById
         * @methodOf lbServices.Subject.students
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
          var action = TargetResource["::findById::subject::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.students#link
         * @methodOf lbServices.Subject.students
         *
         * @description
         *
         * Add a related item by id for students.
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
        R.students.link = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::link::subject::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.students#unlink
         * @methodOf lbServices.Subject.students
         *
         * @description
         *
         * Remove the students relation to an item by id.
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
        R.students.unlink = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::unlink::subject::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subject.students#updateById
         * @methodOf lbServices.Subject.students
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
          var action = TargetResource["::updateById::subject::students"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Lecture
 * @header lbServices.Lecture
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Lecture` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Lecture",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/lectures/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Lecture.absentees.findById() instead.
        "prototype$__findById__absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/absentees/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lecture.absentees.destroyById() instead.
        "prototype$__destroyById__absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/absentees/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.absentees.updateById() instead.
        "prototype$__updateById__absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/absentees/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lecture.absentees() instead.
        "prototype$__get__absentees": {
          isArray: true,
          url: urlBase + "/lectures/:id/absentees",
          method: "GET"
        },

        // INTERNAL. Use Lecture.absentees.create() instead.
        "prototype$__create__absentees": {
          url: urlBase + "/lectures/:id/absentees",
          method: "POST"
        },

        // INTERNAL. Use Lecture.absentees.destroyAll() instead.
        "prototype$__delete__absentees": {
          url: urlBase + "/lectures/:id/absentees",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.absentees.count() instead.
        "prototype$__count__absentees": {
          url: urlBase + "/lectures/:id/absentees/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#create
         * @methodOf lbServices.Lecture
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/lectures",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#createMany
         * @methodOf lbServices.Lecture
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/lectures",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#upsert
         * @methodOf lbServices.Lecture
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/lectures",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#exists
         * @methodOf lbServices.Lecture
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
          url: urlBase + "/lectures/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#findById
         * @methodOf lbServices.Lecture
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/lectures/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#find
         * @methodOf lbServices.Lecture
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/lectures",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#findOne
         * @methodOf lbServices.Lecture
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/lectures/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#updateAll
         * @methodOf lbServices.Lecture
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
          url: urlBase + "/lectures/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#deleteById
         * @methodOf lbServices.Lecture
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/lectures/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#count
         * @methodOf lbServices.Lecture
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
          url: urlBase + "/lectures/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#prototype$updateAttributes
         * @methodOf lbServices.Lecture
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/lectures/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#createChangeStream
         * @methodOf lbServices.Lecture
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
          url: urlBase + "/lectures/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Absentee.lecture() instead.
        "::get::absentee::lecture": {
          url: urlBase + "/absentees/:id/lecture",
          method: "GET"
        },

        // INTERNAL. Use Absentee.lecture.create() instead.
        "::create::absentee::lecture": {
          url: urlBase + "/absentees/:id/lecture",
          method: "POST"
        },

        // INTERNAL. Use Absentee.lecture.createMany() instead.
        "::createMany::absentee::lecture": {
          isArray: true,
          url: urlBase + "/absentees/:id/lecture",
          method: "POST"
        },

        // INTERNAL. Use Absentee.lecture.update() instead.
        "::update::absentee::lecture": {
          url: urlBase + "/absentees/:id/lecture",
          method: "PUT"
        },

        // INTERNAL. Use Absentee.lecture.destroy() instead.
        "::destroy::absentee::lecture": {
          url: urlBase + "/absentees/:id/lecture",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Lecture#updateOrCreate
         * @methodOf lbServices.Lecture
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Lecture#update
         * @methodOf lbServices.Lecture
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
         * @name lbServices.Lecture#destroyById
         * @methodOf lbServices.Lecture
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Lecture#removeById
         * @methodOf lbServices.Lecture
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Lecture#modelName
    * @propertyOf lbServices.Lecture
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Lecture`.
    */
    R.modelName = "Lecture";

    /**
     * @ngdoc object
     * @name lbServices.Lecture.absentees
     * @header lbServices.Lecture.absentees
     * @object
     * @description
     *
     * The object `Lecture.absentees` groups methods
     * manipulating `Absentee` instances related to `Lecture`.
     *
     * Call {@link lbServices.Lecture#absentees Lecture.absentees()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Lecture#absentees
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Queries absentees of lecture.
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R.absentees = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::get::lecture::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.absentees#count
         * @methodOf lbServices.Lecture.absentees
         *
         * @description
         *
         * Counts absentees of lecture.
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
        R.absentees.count = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::count::lecture::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.absentees#create
         * @methodOf lbServices.Lecture.absentees
         *
         * @description
         *
         * Creates a new instance in absentees of this model.
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R.absentees.create = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::create::lecture::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.absentees#createMany
         * @methodOf lbServices.Lecture.absentees
         *
         * @description
         *
         * Creates a new instance in absentees of this model.
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R.absentees.createMany = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::createMany::lecture::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.absentees#destroyAll
         * @methodOf lbServices.Lecture.absentees
         *
         * @description
         *
         * Deletes all absentees of this model.
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
        R.absentees.destroyAll = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::delete::lecture::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.absentees#destroyById
         * @methodOf lbServices.Lecture.absentees
         *
         * @description
         *
         * Delete a related item by id for absentees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for absentees
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
        R.absentees.destroyById = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::destroyById::lecture::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.absentees#findById
         * @methodOf lbServices.Lecture.absentees
         *
         * @description
         *
         * Find a related item by id for absentees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for absentees
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R.absentees.findById = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::findById::lecture::absentees"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.absentees#updateById
         * @methodOf lbServices.Lecture.absentees
         *
         * @description
         *
         * Update a related item by id for absentees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for absentees
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R.absentees.updateById = function() {
          var TargetResource = $injector.get("Absentee");
          var action = TargetResource["::updateById::lecture::absentees"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Absentee
 * @header lbServices.Absentee
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Absentee` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Absentee",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/absentees/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Absentee.student() instead.
        "prototype$__get__student": {
          url: urlBase + "/absentees/:id/student",
          method: "GET"
        },

        // INTERNAL. Use Absentee.student.create() instead.
        "prototype$__create__student": {
          url: urlBase + "/absentees/:id/student",
          method: "POST"
        },

        // INTERNAL. Use Absentee.student.update() instead.
        "prototype$__update__student": {
          url: urlBase + "/absentees/:id/student",
          method: "PUT"
        },

        // INTERNAL. Use Absentee.student.destroy() instead.
        "prototype$__destroy__student": {
          url: urlBase + "/absentees/:id/student",
          method: "DELETE"
        },

        // INTERNAL. Use Absentee.lecture() instead.
        "prototype$__get__lecture": {
          url: urlBase + "/absentees/:id/lecture",
          method: "GET"
        },

        // INTERNAL. Use Absentee.lecture.create() instead.
        "prototype$__create__lecture": {
          url: urlBase + "/absentees/:id/lecture",
          method: "POST"
        },

        // INTERNAL. Use Absentee.lecture.update() instead.
        "prototype$__update__lecture": {
          url: urlBase + "/absentees/:id/lecture",
          method: "PUT"
        },

        // INTERNAL. Use Absentee.lecture.destroy() instead.
        "prototype$__destroy__lecture": {
          url: urlBase + "/absentees/:id/lecture",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#create
         * @methodOf lbServices.Absentee
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/absentees",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#createMany
         * @methodOf lbServices.Absentee
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/absentees",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#upsert
         * @methodOf lbServices.Absentee
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/absentees",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#exists
         * @methodOf lbServices.Absentee
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
          url: urlBase + "/absentees/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#findById
         * @methodOf lbServices.Absentee
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/absentees/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#find
         * @methodOf lbServices.Absentee
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/absentees",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#findOne
         * @methodOf lbServices.Absentee
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/absentees/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#updateAll
         * @methodOf lbServices.Absentee
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
          url: urlBase + "/absentees/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#deleteById
         * @methodOf lbServices.Absentee
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/absentees/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#count
         * @methodOf lbServices.Absentee
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
          url: urlBase + "/absentees/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#prototype$updateAttributes
         * @methodOf lbServices.Absentee
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/absentees/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Absentee#createChangeStream
         * @methodOf lbServices.Absentee
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
          url: urlBase + "/absentees/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Student.absentees.findById() instead.
        "::findById::student::absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/absentees/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.absentees.destroyById() instead.
        "::destroyById::student::absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/absentees/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.absentees.updateById() instead.
        "::updateById::student::absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/absentees/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.absentees() instead.
        "::get::student::absentees": {
          isArray: true,
          url: urlBase + "/students/:id/absentees",
          method: "GET"
        },

        // INTERNAL. Use Student.absentees.create() instead.
        "::create::student::absentees": {
          url: urlBase + "/students/:id/absentees",
          method: "POST"
        },

        // INTERNAL. Use Student.absentees.createMany() instead.
        "::createMany::student::absentees": {
          isArray: true,
          url: urlBase + "/students/:id/absentees",
          method: "POST"
        },

        // INTERNAL. Use Student.absentees.destroyAll() instead.
        "::delete::student::absentees": {
          url: urlBase + "/students/:id/absentees",
          method: "DELETE"
        },

        // INTERNAL. Use Student.absentees.count() instead.
        "::count::student::absentees": {
          url: urlBase + "/students/:id/absentees/count",
          method: "GET"
        },

        // INTERNAL. Use Lecture.absentees.findById() instead.
        "::findById::lecture::absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/absentees/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lecture.absentees.destroyById() instead.
        "::destroyById::lecture::absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/absentees/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.absentees.updateById() instead.
        "::updateById::lecture::absentees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/absentees/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lecture.absentees() instead.
        "::get::lecture::absentees": {
          isArray: true,
          url: urlBase + "/lectures/:id/absentees",
          method: "GET"
        },

        // INTERNAL. Use Lecture.absentees.create() instead.
        "::create::lecture::absentees": {
          url: urlBase + "/lectures/:id/absentees",
          method: "POST"
        },

        // INTERNAL. Use Lecture.absentees.createMany() instead.
        "::createMany::lecture::absentees": {
          isArray: true,
          url: urlBase + "/lectures/:id/absentees",
          method: "POST"
        },

        // INTERNAL. Use Lecture.absentees.destroyAll() instead.
        "::delete::lecture::absentees": {
          url: urlBase + "/lectures/:id/absentees",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.absentees.count() instead.
        "::count::lecture::absentees": {
          url: urlBase + "/lectures/:id/absentees/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Absentee#updateOrCreate
         * @methodOf lbServices.Absentee
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Absentee#update
         * @methodOf lbServices.Absentee
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
         * @name lbServices.Absentee#destroyById
         * @methodOf lbServices.Absentee
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Absentee#removeById
         * @methodOf lbServices.Absentee
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
         * This usually means the response is a `Absentee` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Absentee#modelName
    * @propertyOf lbServices.Absentee
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Absentee`.
    */
    R.modelName = "Absentee";

    /**
     * @ngdoc object
     * @name lbServices.Absentee.student
     * @header lbServices.Absentee.student
     * @object
     * @description
     *
     * The object `Absentee.student` groups methods
     * manipulating `Student` instances related to `Absentee`.
     *
     * Call {@link lbServices.Absentee#student Absentee.student()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Absentee#student
         * @methodOf lbServices.Absentee
         *
         * @description
         *
         * Fetches hasOne relation student.
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
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.student = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::absentee::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Absentee.student#create
         * @methodOf lbServices.Absentee.student
         *
         * @description
         *
         * Creates a new instance in student of this model.
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
        R.student.create = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::create::absentee::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Absentee.student#createMany
         * @methodOf lbServices.Absentee.student
         *
         * @description
         *
         * Creates a new instance in student of this model.
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
        R.student.createMany = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::createMany::absentee::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Absentee.student#destroy
         * @methodOf lbServices.Absentee.student
         *
         * @description
         *
         * Deletes student of this model.
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
        R.student.destroy = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::destroy::absentee::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Absentee.student#update
         * @methodOf lbServices.Absentee.student
         *
         * @description
         *
         * Update student of this model.
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
        R.student.update = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::update::absentee::student"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Absentee.lecture
     * @header lbServices.Absentee.lecture
     * @object
     * @description
     *
     * The object `Absentee.lecture` groups methods
     * manipulating `Lecture` instances related to `Absentee`.
     *
     * Call {@link lbServices.Absentee#lecture Absentee.lecture()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Absentee#lecture
         * @methodOf lbServices.Absentee
         *
         * @description
         *
         * Fetches hasOne relation lecture.
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lecture = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::get::absentee::lecture"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Absentee.lecture#create
         * @methodOf lbServices.Absentee.lecture
         *
         * @description
         *
         * Creates a new instance in lecture of this model.
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lecture.create = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::create::absentee::lecture"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Absentee.lecture#createMany
         * @methodOf lbServices.Absentee.lecture
         *
         * @description
         *
         * Creates a new instance in lecture of this model.
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lecture.createMany = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::createMany::absentee::lecture"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Absentee.lecture#destroy
         * @methodOf lbServices.Absentee.lecture
         *
         * @description
         *
         * Deletes lecture of this model.
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
        R.lecture.destroy = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::destroy::absentee::lecture"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Absentee.lecture#update
         * @methodOf lbServices.Absentee.lecture
         *
         * @description
         *
         * Update lecture of this model.
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
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lecture.update = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::update::absentee::lecture"];
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
