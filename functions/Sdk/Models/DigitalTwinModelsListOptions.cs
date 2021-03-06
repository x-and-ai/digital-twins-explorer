// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace AdtExplorer.Functions.Sdk.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    /// <summary>
    /// Additional parameters for List operation.
    /// </summary>
    public partial class DigitalTwinModelsListOptions
    {
        /// <summary>
        /// Initializes a new instance of the DigitalTwinModelsListOptions
        /// class.
        /// </summary>
        public DigitalTwinModelsListOptions()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the DigitalTwinModelsListOptions
        /// class.
        /// </summary>
        /// <param name="maxItemCount">The maximum number of items to retrieve
        /// per request. The server may choose to return less than the
        /// requested max.</param>
        public DigitalTwinModelsListOptions(int? maxItemCount = default(int?))
        {
            MaxItemCount = maxItemCount;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets the maximum number of items to retrieve per request.
        /// The server may choose to return less than the requested max.
        /// </summary>
        [Newtonsoft.Json.JsonIgnore]
        public int? MaxItemCount { get; set; }

    }
}
