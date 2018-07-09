PennLabs API Endpoints
==================

Redis-backed caching server for the Open Data APIs. Intended for use by Penn students who want to build products using Penn data.

## Dining

### venues
Return a list of all dining venues.

#### Usage
<table>
    <thead>
        <tr>
            <th>URL</th>
            <th>HTTP Method</th>
            <th>Response Format</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>https://api.pennlabs.org/dining/venues</code></td>
            <td>GET</td>
            <td>JSON</td>
        </tr>
    </tbody>
</table>

#### Parameters
No parameters.

#### Examples
<table>
    <tbody>
        <tr>
            <td>Example Request</td>
            <td><code></code></td>
        </tr>
        <tr>
            <td>Example Response</td>
            <td><code></code></td>
        </tr>
    </tbody>
</table>

### hours
Return the week's hours for the venue with <code>venue_id</code>.

#### Usage
<table>
    <thead>
        <tr>
            <th>URL</th>
            <th>HTTP Method</th>
            <th>Response Format</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>https://api.pennlabs.org/dining/hours/{venue_id}</code></td>
            <td>GET</td>
            <td>JSON</td>
        </tr>
    </tbody>
</table>

#### Parameters
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>venue_id</td>
            <td><b>Required</b></td>
            <td>Integer</td>
            <td>The integer ID of the desired dining venue.</td>
        </tr>
    </tbody>
</table>

#### Examples
<table>
    <tbody>
        <tr>
            <td>Example Request</td>
            <td><code></code></td>
        </tr>
        <tr>
            <td>Example Response</td>
            <td><code></code></td>
        </tr>
    </tbody>
</table>

### daily_menu
Return the week's menus for the venue with <code>venue_id</code>.

#### Usage
<table>
    <thead>
        <tr>
            <th>URL</th>
            <th>HTTP Method</th>
            <th>Response Format</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>https://api.pennlabs.org/dining/daily_menu/{venue_id}</code></td>
            <td>GET</td>
            <td>JSON</td>
        </tr>
    </tbody>
</table>

#### Parameters
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>venue_id</td>
            <td><b>Required</b></td>
            <td>Integer</td>
            <td>The integer ID of the desired dining venue.</td>
        </tr>
    </tbody>
</table>

#### Examples
<table>
    <tbody>
        <tr>
            <td>Example Request</td>
            <td><code></code></td>
        </tr>
        <tr>
            <td>Example Response</td>
            <td><code></code></td>
        </tr>
    </tbody>
</table>

### weekly_menu
Return the week's menus for the venue with <code>venue_id</code>.

#### Usage
<table>
    <thead>
        <tr>
            <th>URL</th>
            <th>HTTP Method</th>
            <th>Response Format</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>https://api.pennlabs.org/dining/weekly_menu/{venue_id}</code></td>
            <td>GET</td>
            <td>JSON</td>
        </tr>
    </tbody>
</table>

#### Parameters
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>venue_id</td>
            <td><b>Required</b></td>
            <td>Integer</td>
            <td>The integer ID of the desired dining venue.</td>
        </tr>
    </tbody>
</table>

#### Examples
<table>
    <tbody>
        <tr>
            <td>Example Request</td>
            <td><code></code></td>
        </tr>
        <tr>
            <td>Example Response</td>
            <td><code></code></td>
        </tr>
    </tbody>
</table>



## Laundry

### halls
Return information on all laundry rooms.

#### Usage
<table>
    <thead>
        <tr>
            <th>URL</th>
            <th>HTTP Method</th>
            <th>Response Format</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>https://api.pennlabs.org/laundry/halls</code></td>
            <td>GET</td>
            <td>JSON</td>
        </tr>
    </tbody>
</table>

#### Parameters
No parameters.

#### Examples
<table>
    <tbody>
        <tr>
            <td>Example Request</td>
            <td><code></code></td>
        </tr>
        <tr>
            <td>Example Response</td>
            <td><code></code></td>
        </tr>
    </tbody>
</table>

### halls/ids
Return a list of hall names and their corresponding IDs and locations.

#### Usage
<table>
    <thead>
        <tr>
            <th>URL</th>
            <th>HTTP Method</th>
            <th>Response Format</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>https://api.pennlabs.org/laundry/halls/ids</code></td>
            <td>GET</td>
            <td>JSON</td>
        </tr>
    </tbody>
</table>

#### Parameters
No parameters.

#### Examples
<table>
    <tbody>
        <tr>
            <td>Example Request</td>
            <td><code></code></td>
        </tr>
        <tr>
            <td>Example Response</td>
            <td><code></code></td>
        </tr>
    </tbody>
</table>

### hall
Return the hall information for the hall with <code>hall_id</code>. Can get information for two halls at a time by also specifying <code>hall_2_id</code>.

#### Usage
<table>
    <thead>
        <tr>
            <th>URL</th>
            <th>HTTP Method</th>
            <th>Response Format</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>https://api.pennlabs.org/laundry/hall/{hall_id}</code></td>
            <td>GET</td>
            <td>JSON</td>
        </tr>
        <tr>
            <td><code>https://api.pennlabs.org/laundry/hall/{hall_id}/{hall_2_id}</code></td>
            <td>GET</td>
            <td>JSON</td>
        </tr>
    </tbody>
</table>

#### Parameters
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>hall_id</td>
            <td><b>Required</b></td>
            <td>Integer</td>
            <td>The integer ID of the desired laundry hall.</td>
        </tr>
        <tr>
            <td>hall_2_id</td>
            <td>Optional</td>
            <td>Integer</td>
            <td>The integer ID of the desired secondary laundry hall.</td>
        </tr>
    </tbody>
</table>

#### Examples
<table>
    <tbody>
        <tr>
            <td>Example Request</td>
            <td><code></code></td>
        </tr>
        <tr>
            <td>Example Response</td>
            <td><code></code></td>
        </tr>
    </tbody>
</table>

### usage
Return the usage information for machines in the hall with <code>hall_id</code>. If no <code>date</code> is specified, the current date is used.

#### Usage
<table>
    <thead>
        <tr>
            <th>URL</th>
            <th>HTTP Method</th>
            <th>Response Format</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>https://api.pennlabs.org/laundry/usage/{hall_id}/{date}</code></td>
            <td>GET</td>
            <td>JSON</td>
        </tr>
    </tbody>
</table>

#### Parameters
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>hall_id</td>
            <td><b>Required</b></td>
            <td>Integer</td>
            <td>The integer ID of the desired laundry hall.</td>
        </tr>
        <tr>
            <td>date</td>
            <td>Optional</td>
            <td>String</td>
            <td>A string representation of the desired date, formatted as YYYY-MM-DD.</td>
        </tr>
    </tbody>
</table>

#### Examples
<table>
    <tbody>
        <tr>
            <td>Example Request</td>
            <td><code></code></td>
        </tr>
        <tr>
            <td>Example Response</td>
            <td><code></code></td>
        </tr>
    </tbody>
</table>